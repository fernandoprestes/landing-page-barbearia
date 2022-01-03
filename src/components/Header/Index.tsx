import style from './styles.module.scss'
import Logo from './../../images/logo-branco.png'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <a href="#">
          <img src={Logo} alt="logo barbearia" />
        </a>
        <nav className={style.header__navigation}>
          <ul className={style.header__navigation__itens}>
            <li>
              <a href="#about">sobre</a>
            </li>
            <li>
              <a href="products">produtos</a>
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
