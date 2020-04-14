import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />
      <div className="flex items-center justify-center flex-grow">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
