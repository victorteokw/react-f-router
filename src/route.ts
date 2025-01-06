import { extractPath, type Extract } from "./extract"

export function route<O>(path: string, handler: (extract: Extract) => O): O {
  return handler(((pattern: string) => extractPath(path, pattern)) as Extract)
}
