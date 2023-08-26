import { FormEvent, useState } from 'react'
import { FormStyles, TextForm, DivLabel, Span, Button, Container } from '../assets/styles/form.ts'

function random() {
    return Math.floor(Math.random() * 10) + 1;
}

function generateCaptcha() {
    const n1 = random()
    const n2 = random()
    const n3 = random()
    const result = n1 + n2 - n3

    return {
        n1,
        n2,
        n3,
        result
    }
}

export default function Form() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [captchaResult, setCaptchaResult] = useState<string>('');
    const [captcha] = useState(generateCaptcha())

    const handleSubmit = async (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (String(captcha.result) !== captchaResult) {
            alert('Validação incorreta')
        }

        await fetch('https://landing-page-api.vercel.app/api/lead', {
            method: 'POST',
            body: JSON.stringify({
                email,
                name,
                phone
            })
        })

        alert('LEAD enviado com SUCESSO!')
    }

    return (
        <>
            <Container>
                <FormStyles>
                    <TextForm>
                        <p>
                            Preencha o formulário abaixo e tenha acesso ao e-book “O passo-a-passo para se tornar um desenvolvedor de Software”
                        </p>
                    </TextForm>
                    <DivLabel>
                        <label htmlFor='name'>
                            <Span>Nome*</Span><br />
                            <input
                                type='text'
                                name='name'
                                id='name'
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </label><br />
                    </DivLabel>

                    <DivLabel>
                        <label htmlFor='email'>
                            <Span>E-mail*</Span><br />
                            <input
                                type='email'
                                // name='email'
                                id='email'
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </label><br />
                    </DivLabel>

                    <DivLabel>
                        <label htmlFor='phone'>
                            <Span>Telefone (WhatsApp)*</Span><br />
                            <input
                                // name='number'
                                type='tel'
                                id='phone'
                                onChange={(event) => setPhone(event.target.value)}
                            // value={phone}
                            />
                        </label><br />
                    </DivLabel>

                    <DivLabel>
                        <label htmlFor='captcha'>{`${captcha.n1} + ${captcha.n2} - ${captcha.n3} ?`} <br />
                            <input
                                type='text'
                                id='captcha'
                                // name='captcha'
                                required
                                onChange={(event) => setCaptchaResult(event.target.value)}
                            />
                        </label>
                    </DivLabel>

                    <Button type='submit' onClick={handleSubmit}>BAIXAR E-BOOK</Button>

                </FormStyles>
            </Container>
        </>
    )
}
