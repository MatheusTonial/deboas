import { colors, fonts, radius } from "@/constants/theme";
import { StyleSheet } from "react-native";

/**
 * Estilos da aplicação "Tô de Boas!".
 * Usa o Terraform Theme (tons terrosos) — todos os valores vêm de constants/theme.ts.
 */
const styles = StyleSheet.create({
  // Área rolável que envolve toda a tela.
  scroll: {
    flexGrow: 1,
    backgroundColor: colors.surface,
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 32,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 15,
    fontFamily: fonts.regular,
    color: colors.tertiary,
    marginBottom: 24,
    textAlign: "center",
    lineHeight: 21,
  },
  // Rótulo acima de cada campo.
  label: {
    alignSelf: "flex-start",
    fontSize: 15,
    fontFamily: fonts.semibold,
    color: colors.secondary,
    marginBottom: 8,
  },
  // Campo de texto multilinha para descrever a tarefa.
  inputMultiline: {
    width: "100%",
    minHeight: 90,
    backgroundColor: colors.surfaceRaised,
    borderRadius: radius,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
    fontSize: 15,
    fontFamily: fonts.regular,
    color: colors.secondary,
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
    borderRadius: radius,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surfaceRaised,
    alignItems: "center",
  },
  // Estilo aplicado quando o toggle está selecionado (destaque = primária).
  toggleButtonAtivo: {
    borderColor: colors.primary,
    backgroundColor: "#f7e4d3",
  },
  toggleText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: colors.tertiary,
  },
  toggleTextAtivo: {
    color: colors.primary,
  },
  // Botão principal "Gerar resposta".
  button: {
    backgroundColor: colors.primary,
    height: 48,
    alignItems: "center",
    borderRadius: radius,
    justifyContent: "center",
    width: "100%",
  },
  // Estado desabilitado do botão principal.
  buttonDisabled: {
    backgroundColor: colors.primaryMuted,
  },
  buttonText: {
    fontFamily: fonts.bold,
    color: colors.surface,
    fontSize: 16,
  },
  // Card que exibe a resposta gerada.
  card: {
    borderWidth: 1,
    backgroundColor: colors.surfaceRaised,
    marginTop: 30,
    width: "100%",
    borderRadius: radius,
    padding: 20,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.secondary,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.secondary,
    lineHeight: 24,
  },
  // Etiqueta discreta indicando qual IA gerou a resposta.
  provedorTag: {
    alignSelf: "flex-end",
    marginTop: 6,
    fontSize: 12,
    fontFamily: fonts.regular,
    fontStyle: "italic",
    color: colors.tertiary,
  },
  // Botão "Copiar resposta".
  copyButton: {
    marginTop: 12,
    width: "100%",
    height: 44,
    borderRadius: radius,
    borderWidth: 2,
    borderColor: colors.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  copyButtonText: {
    color: colors.secondary,
    fontFamily: fonts.bold,
    fontSize: 15,
  },
});

export default styles;
