import Spacer from './Spacer'
import { contact } from '../data/portfolio'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <Spacer height={2} />
      <h2 className='section__title'>Contact</h2>
      <ul className='skills__list'>
        <a href={`mailto:${contact.email}`} target='_blank' rel='noreferrer' className='skills__list-item'>
          <span type='button' className='btn btn--outline'>
            Email Me
          </span>
        </a>
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target='_blank'
          rel='noreferrer'
          className='skills__list-item'
        >
          <span type='button' className='btn btn--outline'>
            WhatsApp
          </span>
        </a>
        <a
          href={`https://t.me/${contact.telegram}`}
          target='_blank'
          rel='noreferrer'
          className='skills__list-item'
        >
          <span type='button' className='btn btn--outline'>
            Telegram
          </span>
        </a>
      </ul>
    </section>
  )
}

export default Contact
