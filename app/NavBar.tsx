
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <Link href="/">Logo</Link>
            <ul>
                <li><Link href="/characters">characters</Link></li>
                <li><Link href="/episodes">episodes</Link></li>
                <li><Link href="/locations">locations</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar