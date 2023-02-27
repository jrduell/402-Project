import Link from 'next/link'

export default function NavBar() {
    const handleSearch = (event) => {
        console.log("Searching...")
    }

    return (
      <div className="mb-4 text-xl shadow-md">
        <nav className="mx-auto flex max-w-3xl flex-wrap items-center rounded-b p-2">
          <Link className="my-auto rounded py-1" href="/">
            <img
              className="ml-2 mr-4 mt-auto mb-1 pr-2"
              src="/logo-with-text.png"
              width="200"
            ></img>
          </Link>
          <Link className="navbar-button" href="/">
            Home
          </Link>
          <Link className="navbar-button" href="/login">
            Log In
          </Link>

          <Link className="navbar-button" href="/create_account">
            Create Account
          </Link>
          <Link className="navbar-button" href="/account">
            Account
          </Link>
        </nav>
      </div>
    );
  }
