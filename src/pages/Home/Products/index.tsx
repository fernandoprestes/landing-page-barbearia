import style from './style.module.scss'
import HairImg from './../../../images/cabelo.png'
import BeardImg from './../../../images/barba.png'
import HairBeardImg from './../../../images/cabelo-barba.png'
import { Title } from '../../../components/Title'
import { Card } from '../../../components/Card'
import Button from '../../../components/Button'

export const Products = () => {
  return (
    <div className={style.products}>
      <Title>Produtos</Title>
      <div className={style.products__cards}>
        <Card
          title="Cabelo"
          img={HairImg}
          content="Na tesoura ou máquina, como o cliente preferir"
          price="R$ 25,00"
        />

        <Card
          title="Barba"
          img={BeardImg}
          content="Corte e desenho profissional de barba"
          price="R$ 18,00"
        />

        <Card
          title="Cabelo &#38; Barba"
          img={HairBeardImg}
          content="Pacote completo de cabelo e barba"
          price="R$ 35,00"
        />
      </div>
    </div>
  )
}
