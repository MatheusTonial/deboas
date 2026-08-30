import { StyleSheet } from "react-native";

/**
 * Estilos da aplicação "Tô de Boas!".
 * Paleta: vermelho coral (#FF6B6B) para destaques e verde-água (#4ECDC4)
 * para ações principais.
 */
const styles = StyleSheet.create({
  // Área rolável que envolve toda a tela.
  scroll: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF6B6B",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#666",
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
  },
  // Rótulo acima de cada campo.
  label: {
    alignSelf: "flex-start",
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  // Campo de texto multilinha para descrever a tarefa.
  inputMultiline: {
    width: "100%",
    minHeight: 90,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    fontSize: 15,
  },
  // Linha com os dois botões de seleção (toggle).
  toggleRow: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  // Estilo aplicado quando o toggle está selecionado.
  toggleButtonAtivo: {
    borderColor: "#FF6B6B",
    backgroundColor: "#FFE3E3",
  },
  toggleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
  },
  toggleTextAtivo: {
    color: "#FF6B6B",
  },
  // Botão principal "Gerar resposta".
  button: {
    backgroundColor: "#4ECDC4",
    height: 48,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    width: "100%",
  },
  // Estado desabilitado do botão principal.
  buttonDisabled: {
    backgroundColor: "#B5E5E1",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 16,
  },
  // Card que exibe a resposta gerada.
  card: {
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 30,
    width: "100%",
    borderRadius: 10,
    padding: 20,
    borderColor: "#ddd",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  // Etiqueta discreta indicando qual IA gerou a resposta.
  provedorTag: {
    alignSelf: "flex-end",
    marginTop: 6,
    fontSize: 12,
    fontStyle: "italic",
    color: "#999",
  },
  // Botão "Copiar resposta".
  copyButton: {
    marginTop: 12,
    width: "100%",
    height: 44,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4ECDC4",
    alignItems: "center",
    justifyContent: "center",
  },
  copyButtonText: {
    color: "#4ECDC4",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
