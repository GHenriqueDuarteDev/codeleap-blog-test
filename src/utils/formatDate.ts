import { formatDistanceToNow, parseISO } from "date-fns";

export function formatRelativeTime(dateString: string) {
  try {
    const date = parseISO(dateString);

    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    console.error("Erro ao formatar data:", error);
    return "just now";
  }
}
