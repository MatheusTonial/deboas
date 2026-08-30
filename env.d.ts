/// <reference types="expo/types" />

/**
 * Tipagem das variáveis de ambiente usadas pelo app.
 * (O Expo também gera um expo-env.d.ts automaticamente ao rodar `expo start`,
 *  mas esse arquivo garante o autocomplete mesmo antes disso.)
 */
declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_GEMINI_API_KEY?: string;
    EXPO_PUBLIC_ANTHROPIC_API_KEY?: string;
  }
}
