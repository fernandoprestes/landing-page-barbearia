import style from './style.module.scss'

interface ButtonProps {
  children: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({ type, children }: ButtonProps) => {
  return (
    <button className={style.button} type={type}>
      {children}
    </button>
  )
}

export default Button
