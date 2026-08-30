import { SYSTEM_PROMPT } from "@/constants/prompts";

// Intenção do usuário diante da tarefa recebida.
export type Intencao = "aceitar" | "recusar";

// Nome do provedor que efetivamente respondeu (útil para depurar / mostrar na UI).
export type Provedor = "gemini" | "claude";

// Resultado da geração: o texto e qual provedor foi usado.
export type ResultadoGeracao = {
  texto: string;
  provedor: Provedor | null;
};

// ---------------------------------------------------------------------------
// Chaves de API (variáveis de ambiente com prefixo EXPO_PUBLIC_ para ficarem
// disponíveis no bundle do app). Precisam ser lidas por dot notation direta.
// ---------------------------------------------------------------------------
const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const ANTHROPIC_API_KEY = process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY;

// Modelos usados em cada provedor.
const GEMINI_MODEL = "gemini-3.6-flash";
const CLAUDE_MODEL = "claude-sonnet-4-6";

// Monta a mensagem do usuário no formato que o system prompt espera.
function montarUserMessage(tarefa: string, intencao: Intencao): string {
  return `Tarefa recebida: "${tarefa}"\nIntenção: ${intencao.toUpperCase()}`;
}

// ---------------------------------------------------------------------------
// Provedor 1: Google Gemini (usado primeiro — tem cota gratuita)
// ---------------------------------------------------------------------------
async function chamarGemini(userMessage: string): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("EXPO_PUBLIC_GEMINI_API_KEY não configurada");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      // O system prompt vai em system_instruction.
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [{ role: "user", parts: [{ text: userMessage }] }],
    }),
  });

  if (!response.ok) {
    const erro = await response.text();
    throw new Error(`Gemini respondeu ${response.status}: ${erro}`);
  }

  const data = await response.json();
  const texto = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!texto) throw new Error("Gemini não retornou texto");
  return texto;
}

// ---------------------------------------------------------------------------
// Provedor 2: Anthropic Claude (fallback, caso o Gemini falhe)
// ---------------------------------------------------------------------------
async function chamarClaude(userMessage: string): Promise<string> {
  if (!ANTHROPIC_API_KEY) {
    throw new Error("EXPO_PUBLIC_ANTHROPIC_API_KEY não configurada");
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      // Necessário para permitir a chamada direta a partir do app/web.
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  if (!response.ok) {
    const erro = await response.text();
    throw new Error(`Claude respondeu ${response.status}: ${erro}`);
  }

  const data = await response.json();
  const texto = data?.content?.[0]?.text;
  if (!texto) throw new Error("Claude não retornou texto");
  return texto;
}

/**
 * Gera a resposta cômica para a tarefa/intenção do usuário.
 *
 * Estratégia: tenta o Gemini primeiro (cota gratuita); se ele falhar por
 * qualquer motivo (sem chave, erro de rede, limite atingido), cai para o Claude.
 * Se ambos falharem, devolve uma mensagem amigável.
 *
 * @param tarefa - O que pediram para o usuário fazer no trabalho
 * @param intencao - "aceitar" (lamento de mártir) ou "recusar" (desculpa surreal)
 */
export async function gerarResposta(
  tarefa: string,
  intencao: Intencao,
): Promise<ResultadoGeracao> {
  const userMessage = montarUserMessage(tarefa, intencao);

  // 1ª tentativa: Gemini.
  try {
    const texto = await chamarGemini(userMessage);
    return { texto, provedor: "gemini" };
  } catch (e) {
    console.warn("Gemini falhou, tentando Claude:", e);
  }

  // 2ª tentativa: Claude.
  try {
    const texto = await chamarClaude(userMessage);
    return { texto, provedor: "claude" };
  } catch (e) {
    console.error("Claude também falhou:", e);
  }

  // Os dois falharam.
  return {
    texto:
      "Deu ruim ao falar com as IAs. Confere a conexão / as chaves e tenta de novo.",
    provedor: null,
  };
}
