import style from './style.module.scss'

interface ButtonProps {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return <a className={style.button} href="#">{children}</a>
}

export default Button
