import { format } from "date-fns";

import { DATE_DEFAULT_FORMAT } from "./date.constant";

export function transformToDefaultFormat(date: Date): string {
  return format(date, DATE_DEFAULT_FORMAT);
}
