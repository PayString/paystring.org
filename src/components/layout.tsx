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
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex flex-col flex-grow">
        <SEO title={props.title} description={props.description} />
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
