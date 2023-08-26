import logoArnia from "../assets/arnia.svg"
import { HeaderStyle, TextHeader } from "../assets/styles/header"

export default function Header() {
    return (
        <HeaderStyle>
            <img src={logoArnia} alt="Logo Arnia" />
            <TextHeader>
                Se torne hoje mesmo um desenvolvedor de software. <br />
                Conheça a Arnia
            </TextHeader>
        </HeaderStyle>
    )
}

