import { Stack } from "expo-router";

/**
 * Layout raiz do app.
 * O app tem uma tela única (sem navegação), então usamos um Stack simples
 * e escondemos o cabeçalho para a tela ocupar todo o espaço.
 */
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
