import { useState } from 'react'
import { Title } from '../../../components/Title'
import AddressImg from './../../../assets/images/address-map.jpg'
import styleGlobal from './../../../styles/global.module.css'
import style from './styles.module.scss'

export const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const clearForm = (): void => {
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const data = {
      name,
      phone,
      email,
      message
    }
    console.log(`Form was submitted with these data: ${JSON.stringify(data)}`)

    setTimeout(() => {
      clearForm()
    }, 300)
  }

  return (
    <div className={`${style.contact} ${styleGlobal.container}`}>
      <Title>Contato</Title>
      <div className={style.contact__content}>
        <form
          id="contact"
          onSubmit={handleSubmit}
          className={style.contact__form}
        >
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Escreva sua mensagem ..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>

          <input type="submit" value="Enviar" />
        </form>

        <div className={style.contact__location}>
          <div>
            <h2 className={style.contact__location__title}>Localização</h2>
            <ul className={style.contact__location__info}>
              <li>Rua Não existe, 85</li>
              <li>Cidade Perdida, LT, Brasil</li>
              <li>+55 55 12345-6879</li>
              <li>email@server.com</li>
            </ul>
            <h2 className={style.contact__location__title}>Funcionamento</h2>
            <ul className={style.contact__location__info}>
              <li>Segunda a Sexta-feira - 09hs as 18hs</li>
              <li>Horário das 9 horas as 18 horas</li>
            </ul>
          </div>
          <img src={AddressImg} alt="localização" />
        </div>
      </div>
    </div>
  )
}

export default Contact
