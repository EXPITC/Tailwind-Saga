interface Button {
  value: string
  type?: 'button' | 'submit' | 'reset'
  handler?: () => void
}

export default function Button({ value = "This Butt-on", type = "button", handler = () => null }: Button): JSX.Element {

  return (
    <button type={type} onClick={handler} className="
      bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300
      py-2 px-5 text-white text-sm font-medium rounded-full">
      {value}
    </button>
  )
}
