import { describe, it, expect } from '@jest/globals'
import { route } from '../src'

describe('route', () => {

  // it("better way", () => {
  //   const path = "/"
  //   const result = route(path, (match) => first([
  //       [match('/'), (props) => ["HomePage", props]],
  //       [match('/about'), (props) => ["AboutPage", props]],
  //     ])
  //   )
  // })

  it("should match '/'", () => {
    const path = '/'
    const result = route(path, (match) => {
      let props: Record<string, string> | null = null
      if (props = match('/')) {
        return ["HomePage", props]
      } else if (props = match('/about')) {
        return ["AboutPage", props]
      } else if (props = match('/posts/:id')) {
        return ["PostPage", props]
      } else {
        return ["NotFoundPage", {}]
      }
    })
    expect(result).toEqual(["HomePage", {}])
  })

  it("should match '/about'", () => {
    const path = '/about'
    const result = route(path, (match) => {
      let props: Record<string, string> | null = null
      if (props = match('/')) {
        return ["HomePage", props]
      } else if (props = match('/about')) {
        return ["AboutPage", props]
      } else if (props = match('/posts/:id')) {
        return ["PostPage", props]
      } else {
        return ["NotFoundPage", {}]
      }
    })
    expect(result).toEqual(["AboutPage", {}])
  })

  it("should match '/posts/123'", () => {
    const path = '/posts/123'
    const result = route(path, (match) => {
      let props: Record<string, string> | null = null
      if (props = match('/')) {
        return ["HomePage", props]
      } else if (props = match('/about')) {
        return ["AboutPage", props]
      } else if (props = match('/posts/:id')) {
        return ["PostPage", props]
      } else {
        return ["NotFoundPage", {}]
      }
    })
    expect(result).toEqual(["PostPage", { id: "123" }])
  })
})
