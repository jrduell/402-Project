import Link from 'next/link'

export default function NavBar() {
    const handleSearch = (event) => {
        console.log("Searching...")
    }

    return (
      <div className="shadow-md mb-4 text-xl">
        <nav className="flex flex-wrap items-center mx-auto max-w-3xl rounded-b p-2">
          <Link className="py-1 my-auto rounded" href="/">
            <img className="ml-2 pr-2 mr-4 mt-auto mb-1" src="/logo-with-text.png" width="200"></img>
          </Link>
          <Link className="navbar-button" href="/">
            Home
          </Link>
          <Link className="navbar-button" href="/login">
            Log In
          </Link>
          <Link className="navbar-button" href="/create">
            Create Account
          </Link>
        </nav>
      </div>
    )
  }
