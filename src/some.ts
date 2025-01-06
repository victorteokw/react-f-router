export type PassthroughEmpty<I, O> = (input: I) =>
  I extends null ? null :
  I extends undefined ? undefined : O

export function some<I, O>(item: (input: I) => O): PassthroughEmpty<I | null | undefined, O> {
  return function (input: I | null | undefined) {
    switch (input) {
      case null: return null
      case undefined: return undefined
      default: return item(input)
    }
  } as PassthroughEmpty<I | null | undefined, O>
}
