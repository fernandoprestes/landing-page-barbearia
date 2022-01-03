import style from './styles.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <h1>logo</h1>
        <nav className={style.header__navigation}>
          <ul className={style.header__navigation__itens}>
            <li>
              <a href="about">sobre</a>
            </li>
            <li>
              <a href="product">produto</a>
            </li>
            <li>
              <a href="contact">contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
