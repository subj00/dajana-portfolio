/** One row of the career section: a job, a degree or an award. */
export interface CareerEntry {
  /** Main line, e.g. the position or the faculty. */
  title: string;
  /** Quieter line under it, e.g. the employer or the field of study. */
  subtitle: string;
  /** Time period as shown to the visitor, e.g. "2021–2023". */
  period: string;
}

/** A titled group of entries, e.g. "Radno iskustvo". */
export interface CareerGroup {
  title: string;
  entries: CareerEntry[];
}
