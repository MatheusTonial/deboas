/**
 * Terraform Theme — tokens visuais centrais do app.
 *
 * Conceito: "terraformação". Em vez do cinza genérico de UI, tons terrosos que
 * remetem a solo, base sólida e progresso orgânico.
 *
 * Todos os componentes devem importar daqui em vez de espalhar hex codes soltos.
 */

export const colors = {
  /** Laranja vibrante/ativo. Ações principais e destaque de estado atual. */
  primary: "#bd4b00",
  /** Fundo principal — creme/bege claro no lugar do branco puro. */
  surface: "#fbfbe2",
  /** Marrom escuro. Texto de destaque e componentes secundários. */
  secondary: "#3E2723",
  /** Marrom acinzentado. Acentos de apoio, ícones, bordas — simboliza progresso. */
  tertiary: "#8D6E63",

  // --- Variações derivadas, mantendo a paleta terrosa ---
  /** Tom mais claro do primário, para estados desabilitados. */
  primaryMuted: "#e0a373",
  /** Superfície ligeiramente mais escura, para cartões sobre o fundo. */
  surfaceRaised: "#ffffff",
  /** Bege esverdeado para bordas suaves. */
  border: "#d8d3b8",
  /** Texto secundário / placeholders. */
  textMuted: "#8D6E63",
  /** Vermelho-tijolo para erros (combina com a paleta). */
  danger: "#9c3a1a",
} as const;

/** Border-radius padrão ("Rounded Eight"): nem quadrado, nem infantil. */
export const radius = 8;

/**
 * Famílias de fonte (Inter, carregada no _layout via @expo-google-fonts/inter).
 * Se as fontes não carregarem, o RN cai para a fonte do sistema automaticamente.
 */
export const fonts = {
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semibold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
} as const;

export const theme = { colors, radius, fonts } as const;

export default theme;
