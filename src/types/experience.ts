export interface Experience {
  company: string;
  role: string;
  location?: string;
  /** ISO-like date string, e.g. "2024-03". */
  startDate: string;
  /** Leave undefined for a current position. */
  endDate?: string;
  summary?: string;
  highlights?: string[];
  technologies?: string[];
  companyUrl?: string;
}
