import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Mantém a splash screen visível enquanto as fontes carregam.
SplashScreen.preventAutoHideAsync();

/**
 * Layout raiz do app.
 * O app tem uma tela única (sem navegação), então usamos um Stack simples
 * e escondemos o cabeçalho para a tela ocupar todo o espaço.
 * Também carregamos a fonte Inter (Terraform Theme) antes de renderizar.
 */
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
