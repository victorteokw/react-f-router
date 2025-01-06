import { describe, it, expect } from '@jest/globals'
import { route, pipe, some } from '../src'

describe('route', () => {

  it("should match '/'", () => {
    const path = '/'
    const result = route(path, (extract) =>
      pipe(extract('/about'), some((props) => ["AboutPage", props])) ??
      pipe(extract('/posts/:id'), some((props) => ["PostPage", props])) ??
      pipe(extract('/p/:pId/d/:dId'), some((props) => ["PostPage", props])) ??
      pipe(extract('/'), some((props) => ["HomePage", props])) ??
      ["NotFoundPage", {}]
    )
    expect(result).toEqual(["HomePage", {}])
  })

  it("should match '/about'", () => {
    const path = '/about'
    const result = route(path, (extract) =>
      pipe(extract('/'), some((props) => ["HomePage", props])) ??
      pipe(extract('/about'), some((props) => ["AboutPage", props])) ??
      pipe(extract('/posts/:id'), some((props) => ["PostPage", props])) ??
      pipe(extract('/p/:pId/d/:dId'), some((props) => ["PostPage", props])) ??
      ["NotFoundPage", {}]
    )
    expect(result).toEqual(["AboutPage", {}])
  })

  it("should match '/posts/123'", () => {
    const path = '/posts/123'
    const result = route(path, (extract) =>
      pipe(extract('/'), some((props) => ["HomePage", props])) ??
      pipe(extract('/about'), some((props) => ["AboutPage", props])) ??
      pipe(extract('/posts/:id'), some((props) => ["PostPage", props])) ??
      pipe(extract('/p/:pId/d/:dId'), some((props) => ["PostPage", props])) ??
      ["NotFoundPage", {}]
    )
    expect(result).toEqual(["PostPage", { id: "123" }])
  })

  it("should match not found", () => {
    const path = '/abc/def/ghi'
    const result = route(path, (extract) =>
      pipe(extract('/'), some((props) => ["HomePage", props])) ??
      pipe(extract('/about'), some((props) => ["AboutPage", props])) ??
      pipe(extract('/posts/:id'), some((props) => ["PostPage", props])) ??
      pipe(extract('/p/:pId/d/:dId'), some((props) => ["PostPage", props])) ??
      ["NotFoundPage", {}]
    )
    expect(result).toEqual(["NotFoundPage", {}])
  })

  it("should match /start/abc/def/ghi/end", () => {
    const path = '/start/abc/def/ghi/end'
    const result = route(path, (extract) =>
      pipe(extract('/'), some((props) => ["HomePage", props])) ??
      pipe(extract('/start/*catch/end'), some((props) => ["AboutPage", props])) ??
      pipe(extract('/posts/:id'), some((props) => ["PostPage", props])) ??
      pipe(extract('/p/:pId/d/:dId'), some((props) => ["PostPage", props])) ??
      ["NotFoundPage", {}]
    )
    expect(result).toEqual(["AboutPage", {"catch": "abc/def/ghi"}])
  })
})
