import { Form } from "../../components/Form"
import { Title } from "../../components/Title"
import style from './styles.module.scss'

export const Schedule = () => {
  return (
    <main className={style.container}>
      <Title>Agendar</Title>
      <Form />
    </main>
  )
}
