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
    const path = (props as any).path
    const tokens = (match.match(/<.+?>/g) ?? []).map((t) => t.slice(1, t.length - 1))
    if (tokens) {
        const matcher = match.replace(/<.+?>/g, '([^<>/]+?)') + '$'
        const values = path.match(new RegExp(matcher))
        const props: {[key: string]: string} = {}
        tokens.forEach((token, index) => {
            props[token] = values[index + 1]
        })
        return cloneElement(children, props)
    } else {
        return children
    }
}

Route.isRoute = true
Route.isNotFound = false

export default Route
