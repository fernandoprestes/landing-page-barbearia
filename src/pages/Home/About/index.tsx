import { Title } from '../../../components/Title'
import BarberImg from './../../../images/barber-with-customer.jpg'
import BarberProducts from './../../../images/barber-products.jpg'
import style from './styles.module.scss'
import styleGlobal from './../../../styles/global.module.css'
import Button from '../../../components/Button'

export const About = () => {
  return (
    <div id="about" className={`${style.about} ${styleGlobal.container}`}>
      <Title>Sobre</Title>
      <div className={style.about__content}>
        <div className={style.about__content__description}>
          <div className={style.about__content__description__text}>
            <p>
              Localizada no coração da cidade, a Barbearia Alura traz para o
              mercado o que há de melhor para o seu cabelo e barba. Fundada em
              2019, a Barbearia Alura já é destaque na cidade e conquista novos
              clientes a cada dia.
            </p>

            <p>
              Nossa missão é: "Proporcionar auto-estima e qualidade de vida aos
              clientes" .
            </p>

            <p>
              Oferecemos profissionais experientes e antenados às mudanças no
              mundo da moda. O atendimento possui padrão de excelência e
              agilidade, garantindo qualidade e satisfação dos nossos clientes.
            </p>
          </div>
          <div className={style.about__content__description__image}>
            <img src={BarberImg} alt="barber-with-customer" />
          </div>
        </div>
        <div className={style.about__content__benefits}>
          <div className={style.about__content__description__image}>
            <img src={BarberProducts} alt="barber products" />
          </div>
          <div className={style.about__content__benefits__list}>
            <Title>Benefícios</Title>
            <ul>
              <li>
                <span>&#128135;</span> Atendimento
              </li>
              <li>
                <span>&#9986;</span> Profissionais Qualificados
              </li>
              <li>
                <span>&#128136;</span> Espaço diferenciado
              </li>
              <li>
                <span>&#128205;</span> Localização
              </li>
              <li>
                <span>&#127775;</span> Sistema de fidelização
              </li>
            </ul>
            <Button type="button">Agendar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
