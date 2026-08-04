import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><input type="text" /></li>
      </ul>
    </nav>
  )
}


