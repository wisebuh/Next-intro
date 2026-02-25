import React, { Fragment } from 'react'
import Mainheader from './main-header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Mainheader />
      <main>
        {children}
      </main>
    </Fragment>
  )
}