import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: Date): string =>
  format(date, "dd/MM/yyyy", { locale: ptBR });
