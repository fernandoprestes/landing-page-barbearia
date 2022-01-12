import { Form } from '../../../components/Form'
import { Title } from '../../../components/Title'
import AddressImg from './../../../assets/images/address-map.jpg'
import styleGlobal from './../../../styles/global.module.css'
import style from './styles.module.scss'

export const Contact = () => {
  return (
    <div className={`${style.contact} ${styleGlobal.container}`}>
      <Title>Contato</Title>
      <div className={style.contact__content}>
        <Form />

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
