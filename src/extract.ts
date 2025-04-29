type Split<S extends string, D extends string> =
    string extends S ? string[] :
    S extends '' ? [] :
    S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

type Filter<S extends string, I1 extends string, I2 extends string> =
  S extends `${I1}${infer U}` ? U :
    (S extends `${I2}${infer U}` ? U : never)

type UnionToIntersection<U> =
  (U extends any ? (x: U) => void : never) extends (
    (x: infer I) => void) ? I : never

type PropsFromKeys<K> = K extends string ? {
  [P in K]: string
} : never

type RewriteNeverAndUnknown<K, T> =
  K extends never ? T :
  K extends Record<string, string> ? K : T

type PropsFromPattern<P extends string> = RewriteNeverAndUnknown<
  UnionToIntersection<
    PropsFromKeys<Filter<Split<P, "/">[number], ":", "*">>
  >, { }
>

export type Extract = {
  <P extends string>(pattern: P): PropsFromPattern<P> | null
}

export type ExtarctPath = {
  <P extends string>(path: string, pattern: P): PropsFromPattern<P> | null
}

export const extractPath: ExtarctPath = <P extends string>(
  path: string, pattern: P
) => {
  if (path != "/") {
    path = path.replace(/\/$/, '')
  }
  const matcher = '^' + pattern
    .replace(/\:[^\*\:/]+/g, '([^\*\:/]+)')
    .replace(/\*[^\*\:/]+/g, '([^\*\:]+)') + '$'
  console.log(`see this matcher ${matcher}`)
  if (path.match(new RegExp(matcher))) {
    const tokens = (pattern.match(/\*[^\*\:/]+|\:[^\*\:/]+/g) ?? [])
      .map((t) => t.slice(1))
    if (tokens) {
      const values = path.match(new RegExp(matcher))
      const props: {[key: string]: string} = {}
      tokens.forEach((token, index) => {
        if ((token != '') && (values !== null)) {
          props[token] = values[index + 1]
        }
      })
      return props as any
    } else {
      return {}
    }
  }
  return null
}
