import style from './styles.module.scss'

interface CardProps {
  title: string
  img: string
  content: string
  price: string
}

export const Card = ({ title, img, content, price }: CardProps) => {
  return (
    <div className={style.card}>
      <h1 className={style.card__title}>{title}</h1>
      <img src={img} alt="" />
      <p className={style.card__content}>{content}</p>
      <p className={style.card__price}>{price}</p>
    </div>
  )
}
