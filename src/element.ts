import {
  createElement,
  FunctionComponent,
  ReactElement,
  ReactNode
} from "react"

export function element<I extends NoInfer<Record<string, any>>>(
  component: (props: I) => ReactNode
): (props: I) => ReactElement<I, FunctionComponent<I>> {
  return function(props: I) {
    return createElement(component, props)
  }
}
