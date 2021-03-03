import React from "react"
import Head from "next/head"

export interface LayoutProps {
  children?: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = "title" }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <header>header</header>
    {children}
    <footer>footer</footer>
  </div>
)

export default Layout
