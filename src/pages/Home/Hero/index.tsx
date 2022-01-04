import style from './styles.module.scss'
import styleGlobal from './../../../styles/global.module.css'
import LogoImg from './../../../images/logo-branco.png'

export const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={`${style.hero__content} ${styleGlobal.container}`}>
        <img src={LogoImg} alt="" />
      </div>
    </div>
  )
}
