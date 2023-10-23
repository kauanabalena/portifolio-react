import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Kauana Mantovani!', 'Desenvolvedora Front End!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return (
        <div className={styles.presentation} id='Presentation'>
            <h4><strong> Bem-vindo ao meu Portifólio </strong></h4>
            <h1> Olá, eu sou {text} </h1>
            <p>
                Sou apaixonada por criar experiências web envolventes e intuitivas. Com habilidades sólidas em HTML, CSS e <br></br>
                JavaScript, meu foco é transformar conceitos criativos em realidade digital. Sou comprometida com a <br></br>
                usabilidade, acessibilidade e design responsivo, garantindo que cada projeto entregue uma experiência de <br></br>
                usuário excepcional. Estou constantemente explorando novas tendências e tecnologias para manter meu trabalho <br></br>
                na vanguarda do desenvolvimento web.
            </p>
                <ButtonA link='https://github.com/kauanabalena' text='Conecte-se comigo!'></ButtonA>
        </div>
    )
}

export default Presentation