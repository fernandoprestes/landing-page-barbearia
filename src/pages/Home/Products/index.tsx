import style from './style.module.scss'
import styleGlobal from './../../../styles/global.module.css'
import HairImg from './../../../assets/images/card-beard.png'
import BeardImg from './../../../assets/images/card-hair.png'
import HairBeardImg from './../../../assets/images/card-beard-hair.png'
import { Title } from '../../../components/Title'
import { Card } from '../../../components/Card'

export const Products = () => {
  return (
    <div id="products" className={`${style.products} ${styleGlobal.container}`}>
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
