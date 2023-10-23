import styles from './Navbar.module.css'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className = {styles.navbar}>
            <ul>
                <li> <Nav.Link href='#Presentation'>Apresentação</Nav.Link> </li>
                <li> <Nav.Link href='#Skills'>Habilidades</Nav.Link> </li>
                <li> <Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li> <a href='https://github.com/kauanabalena'> <FaGithub size={30}></FaGithub></a></li>
                <li> <a href='https:/www.linkedin.com/in/kauana-mantovani/'><FaLinkedin size={30}></FaLinkedin></a></li>
            </ul>
        </div>
    )
}

export default Navbar