import styles from "../../styles/nav.module.css";
import Link from 'next/link'
const Nav = () => {
    return(<>
        <div className={styles.container}>
        <ul>
        <Link href="/category/category"><li>Home</li></Link>
            <Link href="/category/categoryAdd"><li>Add category</li></Link>
            <li>Contact</li>
            <li>About</li>
        </ul>
        </div>
    </>)
}
export default Nav;