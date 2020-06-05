import React from 'react'

import Footer from './layout/footer'
import Nav from './layout/nav'
import SEO from './layout/seo'

interface LayoutProps {
  title: string
  description?: string
  fixedNav?: boolean
}

const Layout: React.FC<LayoutProps> = (
  props: React.PropsWithChildren<LayoutProps>,
) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav fixed={props.fixedNav} />
      <main className="flex flex-col flex-grow">
        {/* TODO change lang attribute once we have internationalization */}
        <SEO title={props.title} description={props.description} lang="en" />
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
