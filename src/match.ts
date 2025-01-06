export type Match = {
  <T extends Record<string, string>>(pattern: string): T | null
}
