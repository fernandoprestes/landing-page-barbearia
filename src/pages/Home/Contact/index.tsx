import Button from '../../../components/Button'
import { Title } from '../../../components/Title'
import style from './styles.module.scss'
import styleGlobal from './../../../styles/global.module.css'
import EnderecoImg from './../../../assets/images/address-map.jpg'

export const Contact = () => {
  return (
    <div className={`${style.contact} ${styleGlobal.container}`}>
      <Title>Contato</Title>
      <div className={style.contact__content}>
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

        <div className={style.contact__location}>
          <div>
            <h2 className={style.contact__location__title}>Localização</h2>
            <ul className={style.contact__location__info}>
              <li>Rua Não existe, 85</li>
              <li>Cidade Perdida, LT, Brasil</li>
              <li>+55 55 12345-6879</li>
              <li>email@server.com</li>
              <li>seg a sex - 09hs as 18hs</li>
            </ul>
          </div>
          <img src={EnderecoImg} alt="localização" />
        </div>
      </div>
    </div>
  )
}

export default Contact
