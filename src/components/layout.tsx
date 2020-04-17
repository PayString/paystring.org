import React from 'react'

import Footer from './layout/footer'
import Nav from './layout/nav'
import SEO from './seo'

interface LayoutProps {
  title: string
  description?: string
}

const Layout: React.FC<LayoutProps> = (
  props: React.PropsWithChildren<LayoutProps>,
) => {
  return (
    <>
      <Nav />
      <main>
        <SEO title={props.title} description={props.description} />
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
