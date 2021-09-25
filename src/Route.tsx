import React, { FunctionComponent, ReactElement, cloneElement } from 'react'

interface RouteProps {
    match: string
    children: ReactElement
}

export interface RouteComponent<RouteProps> extends FunctionComponent<RouteProps> {
    isRoute: boolean
    isNotFound: boolean
}

const Route: RouteComponent<RouteProps> = (props) => {
    const children = props.children
    const match = props.match
    const path: string = (props as any).path
    const matcher: string = (props as any).matcher
    const tokens = (match.match(/\*|<.+?>/g) ?? []).map((t) => t.slice(1, t.length - 1))
    if (tokens) {
        const values = path.match(new RegExp(matcher))
        const props: {[key: string]: string} = {}
        tokens.forEach((token, index) => {
            if ((token != '') && (values !== null)) {
                props[token] = values[index + 1]
            }
        })
        return cloneElement(children, props)
    } else {
        return children
    }
}

Route.isRoute = true
Route.isNotFound = false

export default Route
