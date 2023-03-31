import styles from "../../styles/nav.module.css";
const Nav = () => {
    return(<>
        <div className={styles.container}>
        <ul>
            <li>Home</li>
            <li>Introduce</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        </div>
    </>)
}
export default Nav;