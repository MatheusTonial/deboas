# 🧘 Tô de Boas!

App em React Native (Expo) para a disciplina de React Native.

O usuário informa uma tarefa que recebeu no trabalho e escolhe se vai **aceitar**
ou **recusar**. A partir disso, o app chama a API do **Claude (Anthropic)** e gera:

- **Vou recusar:** uma desculpa completamente surreal e exagerada, contada a sério.
- **Sou obrigado:** um lamento cômico de mártir, deixando claro que não tinha escolha.

## Stack

- Expo SDK 54 + expo-router + TypeScript
- Tela única (sem navegação)
- IA: **Google Gemini** (`gemini-3.6-flash`) primeiro; **Anthropic Claude** (`claude-sonnet-4-6`) como fallback. Ambos via `fetch`.
- `moti` para a animação do card, `expo-clipboard` para copiar a resposta

## Como rodar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie o arquivo `.env` na raiz (baseado em `.env.example`) com as suas chaves:

   ```
   EXPO_PUBLIC_GEMINI_API_KEY=sua_chave_do_gemini
   EXPO_PUBLIC_ANTHROPIC_API_KEY=sua_chave_do_claude
   ```

   Chave do Gemini (gratuita): https://aistudio.google.com/apikey
   Basta uma das duas para o app funcionar — o Gemini é tentado primeiro e o
   Claude só é usado se o Gemini falhar.

3. Inicie o projeto:

   ```bash
   npx expo start
   ```

   Depois pressione `a` (Android), `i` (iOS) ou `w` (web).

## Estrutura

| Caminho                      | Papel                                                        |
| ---------------------------- | ----------------------------------------------------------- |
| `app/index.tsx`              | Tela única com o formulário, os toggles e o resultado        |
| `app/_layout.tsx`            | Layout raiz (Stack sem header)                               |
| `service/ai/generator.ts`    | `gerarResposta` — chama Gemini e faz fallback para o Claude   |
| `constants/prompts.ts`       | `SYSTEM_PROMPT` que define o comportamento da IA             |
| `components/ResultCard.tsx`  | Card de apresentação da resposta (com animação)              |
| `styles/index.ts`            | Estilos da aplicação                                         |

> ⚠️ A chave fica embutida no bundle do app (limitação do `EXPO_PUBLIC_`). Use uma
> chave de estudo/descartável.
