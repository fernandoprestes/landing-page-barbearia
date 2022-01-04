import Button from '../../../components/Button'
import { Title } from '../../../components/Title'
import style from './styles.module.scss'

export const Contact = () => {
  return (
    <div className={style.contact}>
      <Title>Contato</Title>
      <form id="contact" action="/page" className={style.contact__form}>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="phone">Telefone</label>
        <input type="tel" name="phone" id="phone" />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <textarea
          name="message"
          placeholder="Escreva sua mensagem ..."
        ></textarea>

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  )
}

export default Contact
