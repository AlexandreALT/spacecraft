import { enableExpoCliLogging } from "expo/build/logs/Logs";
import { useStarships } from "../hooks/useStarships";

export const StarshipFeedScreen = () => {
  return (
    useStarships()
  );
};