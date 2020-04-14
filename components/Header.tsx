import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <a className="mr-3">Home</a>
      </Link>
      <Link href="/about">
        <a className="mr-3">About</a>
      </Link>
    </div>
  )
}

export default Header
