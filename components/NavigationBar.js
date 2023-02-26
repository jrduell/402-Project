import Link from 'next/link'

export default function NavBar() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/login">Log In</Link>
            </li>
             <li>
                <Link href="/create">Create Account</Link>
            </li>
        </ul>
    )
  }