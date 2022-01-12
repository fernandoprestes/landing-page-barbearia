import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.scss'

interface ButtonProps {
  children: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ type, children }: ButtonProps) => {
  const history = useNavigate()
  const handleOnClick = useCallback(() => history('/to-schedule'), [history])

  return (
    <button className={style.button} type={type} onClick={handleOnClick}>
      {children}
    </button>
  )
}
