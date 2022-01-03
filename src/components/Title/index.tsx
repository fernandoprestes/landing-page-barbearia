import style from './styles.module.scss'

interface TitleProps {
  children: string
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className={style.title}>{children}</h1>
}
