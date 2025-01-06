export type Match = {
  <T extends Record<string, string>>(pattern: string): T | null
}

function matchAll(path: string, pattern: string) {
  if (path != "/") {
    path = path.replace(/\/$/, '')
  }
  const matcher = '^' + pattern.replace(/\*[^\*\:/]+/g, '([^\*\:]+)').replace(/\:[^\*\:/]+/g, '([^\*\:/]+)') + '$'
  if (path.match(new RegExp(matcher))) {
    const tokens = (pattern.match(/\*[^\*\:/]+|\:[^\*\:/]+/g) ?? []).map((t) => t.slice(1))
    if (tokens) {
      const values = path.match(new RegExp(matcher))
      const props: {[key: string]: string} = {}
      tokens.forEach((token, index) => {
        if ((token != '') && (values !== null)) {
          props[token] = values[index + 1]
        }
      })
      return props
    } else {
      return {}
    }
  }
  return null
}

export function route<O>(path: string, handler: (match: Match) => O): O {
  const match = (pattern: string) => {
    return matchAll(path, pattern)
  }
  return handler(match as Match)
}
