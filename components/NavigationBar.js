import Link from 'next/link'

export default function NavBar() {
    const handleSearch = (event) => {
        console.log("Searching...")
    }

    return (
      <div className="text-xl shadow-md">
        <nav className="flex flex-row items-center rounded-b p-2">
          <div>
            <Link className="py-1" href="/">
              <img
                className="ml-2 mr-4 mt-auto mb-1 pr-2"
                src="/logo-with-text.png"
                width="200"
              ></img>
            </Link>
          </div>
          <div className="">
            <input type="text" placeholder="Search.."></input>
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
          </div>
        </nav>
      </div>
    );
  }
