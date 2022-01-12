import { useState } from 'react'
import style from './style.module.scss'

export const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const clearForm = (): void => {
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const data = {
      name,
      phone,
      email,
      message
    }
    console.log(`Form was submitted with these data: ${JSON.stringify(data)}`)

    setTimeout(() => {
      clearForm()
    }, 300)
  }
  return (
    <form id="contact" onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="phone">Telefone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <textarea
        name="message"
        placeholder="Escreva sua mensagem ..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>

      <input type="submit" value="Enviar" />
    </form>
  )
}
