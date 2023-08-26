import { BodySection, BodyTitle, BodyParagraph, BodyList } from '../assets/styles/body'

export default function Body() {
    return (
        <>
            <BodySection>
                <BodyTitle>
                    Você sabia que no Brasil existirão por volta de 260 mil vagas na
                    área de TI até 2024? Venha se formar na profissão mais quente
                    do mundo. Venha estudar na Arnia.
                </BodyTitle>
                <BodyParagraph>
                    Baixe agora mesmo o e-book “O passo-a-passo para se tornar um desenvolvedor de
                    software”, escrito por nossa qualificada equipe de profissionais e você aprenderá:
                </BodyParagraph>
                <BodyList>
                    <li> As diferenças básicas entre as diferentes vagas de TI do mercado</li>
                    <li>Onde começar a estudar</li>
                    <li>Quais habilidades são necessárias para um desenvolvedor de software</li>
                    <li>O que as empresas esperam de uma entrevista de emprego</li>
                </BodyList>
            </BodySection>
        </>
    )
}