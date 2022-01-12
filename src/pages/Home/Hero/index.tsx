import style from './styles.module.scss'
import styleGlobal from './../../../styles/global.module.css'
import LogoImg from './../../../assets/images/logo.png'
import { Button } from '../../../components/Button'

export const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={`${style.hero__content} ${styleGlobal.container}`}>
        <div className={`${style.hero__content__wrapper}`}>
          <img src={LogoImg} alt="logo da barbearia" />
          <Button>Agendar</Button>
        </div>
      </div>
    </div>
  )
}
