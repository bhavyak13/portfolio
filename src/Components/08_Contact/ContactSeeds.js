import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const contactOptions = [
  {
    name: 'Email',
    icon: <MdOutlineEmail />,
    description: 'bhavyakawatra6@gmail.com',
    url: 'mailto:'
  },
  {
    name: 'WhatsApp',
    icon: <BsWhatsapp />,
    description: '7838793440',
    url: 'https://api.whatsapp.com/send?phone='
  }
]

export default contactOptions;