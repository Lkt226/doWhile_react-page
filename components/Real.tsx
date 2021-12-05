import { useState } from "react";

const Real = () =>{

    const [currentMessage, nextMessage] = useState(0);
    const [arrowStatus, setArrowStatus] = useState("");

    const messages = [
        "Tudo é feito por meio de curtas aulas de video, mensagens nas suas redes sociais e muitos exercicios práticos." as string,
        "No lugar de aulas longas e profundas de 1 hora, divimos toda essa aula em varios conteúdos durante o dia todo." as string,
        "Varios exercicios diferentes durante todo o dia, atraves de BOT no whatsapp, que vai te ajudar a manter o aprendizado." as string
    ]

    let message = {
        id: currentMessage,
        text: messages[currentMessage],
    }

    // RENDER BLOCK MESSAGE
    function renderBlock(id:number, text:string) {
        return(
            <div className="block b_real">
                <h1>{id}</h1>
                <p>{text}</p>
            </div>
        )   
    }

    const action = {
        next(){
            if (currentMessage < messages.length - 1) {
                if (currentMessage == messages.length - 2) {
                    setArrowStatus("last")
                }
                nextMessage(currentMessage + 1);
            }else{
                nextMessage(0);
                setArrowStatus("")
            }
        }
    }

    return(
        <section id="real" className="section_r">
            <div id="img_real" className="banner"></div>
            <h1>Projetos reais</h1>
            <div className="container">
                {renderBlock(message.id+1, message.text)}
            </div>
            <button className={`${arrowStatus} arrow d-hide`} onClick={()=>{action.next()}}>
                <img src="img/icons/icon_arrow.svg" alt="next"/></button>

        </section>
    )
}

export default Real;