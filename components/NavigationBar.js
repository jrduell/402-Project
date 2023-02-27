export default function NavBar() {
    const handleSearch = (event) => {
        console.log("Searching...")
    }

    return (
      <div className="shadow-md mb-4 text-xl">
        <nav className="flex flex-wrap items-center mx-auto max-w-3xl rounded-b p-2">
          <a className="py-1 my-auto rounded" href="/">
            <img className="ml-2 pr-2 mr-4 mt-auto mb-1" src="/logo-with-text.png" width="200"></img>
          </a>
          <a className="navbar-button" href="/">
            Home
          </a>
          <a className="navbar-button" href="/login">
            Log In
          </a>
          <a className="navbar-button" href="/create">
            Create Account
          </a>
        </nav>
      </div>
    )
  }
