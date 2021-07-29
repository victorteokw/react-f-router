import React, { FunctionComponent, ReactElement } from 'react'

export interface NotFoundProps {
  children: ReactElement
}

export interface NotFoundComponent extends FunctionComponent<NotFoundProps> {
  isRoute: boolean
  isNotFound: boolean
}

const NotFound: NotFoundComponent = ({ children }) => {
  return children
}

NotFound.isRoute = false
NotFound.isNotFound = true

export default NotFound
