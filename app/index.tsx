import ResultCard from "@/components/ResultCard";
import {
  gerarResposta,
  type Intencao,
  type Provedor,
} from "@/service/ai/generator";
import styles from "@/styles";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  // Texto digitado pelo usuário (a tarefa que recebeu no trabalho).
  const [tarefa, setTarefa] = useState("");
  // Intenção selecionada: "aceitar", "recusar" ou nada ainda (null).
  const [intencao, setIntencao] = useState<Intencao | null>(null);
  // Resposta gerada pela IA.
  const [resposta, setResposta] = useState("");
  // Qual provedor respondeu ("gemini" ou "claude"), só para exibir na tela.
  const [provedor, setProvedor] = useState<Provedor | null>(null);
  // Indica que estamos aguardando a API.
  const [isLoading, setIsLoading] = useState(false);
  // Feedback visual do botão de copiar.
  const [copiado, setCopiado] = useState(false);

  // O botão principal fica desabilitado sem tarefa, sem intenção ou carregando.
  const podeGerar = tarefa.trim() !== "" && intencao !== null && !isLoading;

  // Chama a IA (Gemini primeiro, Claude como fallback) e guarda a resposta.
  const handleGerar = async () => {
    if (!intencao) return;
    setResposta("");
    setProvedor(null);
    setCopiado(false);
    setIsLoading(true);

    const resultado = await gerarResposta(tarefa, intencao);
    setResposta(resultado.texto);
    setProvedor(resultado.provedor);

    setIsLoading(false);
  };

  // Copia a resposta para a área de transferência.
  const handleCopiar = async () => {
    await Clipboard.setStringAsync(resposta);
    setCopiado(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* 1. Cabeçalho */}
        <Text style={styles.titulo}>🧘 Tô de Boas!</Text>
        <Text style={styles.subtitulo}>
          Para quando te pedem algo chato — mesmo que seja o que você é pago pra
          fazer.
        </Text>

        {/* 2 + 3. Campo da tarefa */}
        <Text style={styles.label}>O que te pediram pra fazer?</Text>
        <TextInput
          value={tarefa}
          onChangeText={setTarefa}
          placeholder="Ex: montar a apresentação do trimestre até amanhã"
          style={styles.inputMultiline}
          multiline
          textAlignVertical="top"
        />

        {/* 4 + 5. Seleção da reação (toggle) */}
        <Text style={styles.label}>Como você vai reagir?</Text>
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              intencao === "aceitar" && styles.toggleButtonAtivo,
            ]}
            onPress={() => setIntencao("aceitar")}
          >
            <Text
              style={[
                styles.toggleText,
                intencao === "aceitar" && styles.toggleTextAtivo,
              ]}
            >
              😩 Sou obrigado
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              intencao === "recusar" && styles.toggleButtonAtivo,
            ]}
            onPress={() => setIntencao("recusar")}
          >
            <Text
              style={[
                styles.toggleText,
                intencao === "recusar" && styles.toggleTextAtivo,
              ]}
            >
              😤 Vou recusar
            </Text>
          </TouchableOpacity>
        </View>

        {/* 6. Botão principal */}
        <TouchableOpacity
          style={[styles.button, !podeGerar && styles.buttonDisabled]}
          onPress={handleGerar}
          disabled={!podeGerar}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Gerar resposta 🎲</Text>
          )}
        </TouchableOpacity>

        {/* 7 + 8. Card com a resposta e botão de copiar */}
        {resposta !== "" && (
          <>
            <ResultCard texto={resposta} />
            {provedor && (
              <Text style={styles.provedorTag}>
                gerado por {provedor === "gemini" ? "Gemini" : "Claude"}
              </Text>
            )}
            <TouchableOpacity style={styles.copyButton} onPress={handleCopiar}>
              <Text style={styles.copyButtonText}>
                {copiado ? "Copiado! ✅" : "Copiar resposta 📋"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
