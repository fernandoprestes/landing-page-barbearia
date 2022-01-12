import style from './styles.module.scss'
import Logo from './../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <Link to="/">
          <img src={Logo} alt="logo barbearia" />
        </Link>
        <nav className={style.header__navigation}>
          <ul className={style.header__navigation__itens}>
            <li>
              <a href="#about">sobre</a>
            </li>
            <li>
              <a href="#products">produtos</a>
            </li>
            <li>
              <a href="#contact">contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
