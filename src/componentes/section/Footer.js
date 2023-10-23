import {FaLinkedin, FaGithub} from "react-icons/fa";
import styles from "./Footer.module.css"

function Footer(){
    return (
        <div className={styles.footer}>
            <ul>
                <li> <a href='https://github.com/kauanabalena'> <FaGithub size={30}></FaGithub></a></li>
                <li> <a href='https:/www.linkedin.com/in/kauana-mantovani/'><FaLinkedin size={30}></FaLinkedin></a></li>
            </ul>
            <p>kauanabalena@gmail.com</p>
            <p>Kauana Balena © 2023 </p>
        </div>
    )
}

export default Footer