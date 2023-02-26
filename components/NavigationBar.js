import Link from 'next/link'

export default function NavBar() {
    const handleSearch = (event) => {
        console.log("Searching...")
    }

    return (
        <ul>
            <li><p>Image goes here</p></li>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/login">Log In</Link>
            </li>
             <li>
                <Link href="/create">Create Account</Link>
            </li>
            <li>
                <input 
                    type="search"
                    placeholder="Search here"
                    onChange={handleSearch}
                />
            </li>
        </ul>
    )
  }