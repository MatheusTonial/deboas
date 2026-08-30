import styles from "@/styles";
import { MotiView } from "moti";
import { Text } from "react-native";

// Props do card: apenas o texto a ser exibido.
type ResultCardProps = {
  texto: string;
};

/**
 * Componente de apresentação puro.
 * Mostra a resposta gerada pela IA dentro de um card estilizado, com uma
 * animação de entrada (fade + deslize de baixo para cima). Sem lógica interna.
 */
export default function ResultCard({ texto }: ResultCardProps) {
  return (
    <MotiView
      style={styles.card}
      from={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Text style={styles.cardTitle}>Sua resposta está pronta 🎉</Text>
      <Text style={styles.cardText}>{texto}</Text>
    </MotiView>
  );
}
