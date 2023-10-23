import styles from './Card.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Card({img, title, tech, description, repo, site }){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return (
        <div onMouseOut={InfoOff} className={styles.card}>
            <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='ERROR'></img>
            </a>

            {info === true &&(

            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}></ButtonB>
            </section>
            )}
        </div>
    )
}

export default Card