import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portifolio from '../../image/projects/portifolio.svg'
import ccxp from '../../image/projects/ccxp.svg'

function Projects(){
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
                img={lpdnc}
                title="LP - DNC"
                tech="HTML, CSS e JavaScript"
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
                repo="https://github.com/kauanabalena/projeto-landing-page/"
                site="https://page-dnc.netlify.app/"></Card>
            <Card
                img={portifolio}
                title="Portifólio"
                tech="HTML, CSS, JavaScript e React"
                description="Desenvolvimento de Portifólio Pessoal"
                repo="https://github.com/kauanabalena/projeto-landing-page/"
                site="https://page-dnc.netlify.app/"></Card>
                 <Card
                img={ccxp}
                title="Landing Page Evento CCXP"
                tech="HTML, CSS e JavaScript"
                description="Landing Page exclusiva para promover o emocionante evento da CCXP23. Com o poder do
                HTML, CSS e JavaScript, consegui criar uma experiência de usuário verdadeiramente envolvente."
                repo="https://github.com/kauanabalena/ccxp"
                site="https://ccxp-event.netlify.app/"></Card>
            <ButtonB link='https://github.com/kauanabalena' text='Acesse o repositório'></ButtonB>
        </div>
    )
}

export default Projects