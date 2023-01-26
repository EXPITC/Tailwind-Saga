
interface btnType {
  type?: 'button' | 'submit' | 'reset'
  value?: string
  className?: string
}

export default function Btn({ type = 'button', value = 'Just a button', className = '' }: btnType) {

  return <button type={type} className={`${className} btn-primary`}>{value}</button>
}
