import React, { FC } from 'react'
import { cloneElement } from 'react';
import { NotFoundComponent } from './NotFound'

interface RouterProps {
    path: string
}

const Router: FC<RouterProps> = ({ path, children }) => {
    path = path.replace(/\/$/, '')
    const childrenArray = React.Children.toArray(children)
    let defaultElement: React.ReactElement = <></>
    for (const child of childrenArray) {
        const elementChild = child as React.ReactElement
        const type = elementChild.type as NotFoundComponent
        if (type.isNotFound) {
            defaultElement = elementChild
        }
        if (type.isRoute) {
            const matcher = '^' + elementChild.props.match
                .replace(/\*/g, '([^<>]+?)')
                .replace(/<.+?>/g, '([^<>/]+?)') + '$'
            if (path.match(new RegExp(matcher))) {
                return cloneElement(elementChild, { path, matcher })
            }
        }
    }
    return defaultElement
}

export default Router
