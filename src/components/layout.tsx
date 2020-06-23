import React from 'react'

import { getBaseURL } from '../utils/config'

import CookieDisclaimer from './layout/cookie-disclaimer'
import Footer from './layout/footer'
import Nav from './layout/nav'
import SEO from './layout/seo'

interface LayoutProps {
  title: string
  path: string
  description?: string
  fixedNav?: boolean
}

const Layout: React.FC<LayoutProps> = (
  props: React.PropsWithChildren<LayoutProps>,
) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CookieDisclaimer />
      <Nav fixed={props.fixedNav} />
      <main className="flex flex-col flex-grow">
        {/* TODO change lang attribute once we have internationalization */}
        <SEO
          title={props.title}
          url={`${getBaseURL()}/${props.path}`}
          description={props.description}
          lang="en"
        />
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
