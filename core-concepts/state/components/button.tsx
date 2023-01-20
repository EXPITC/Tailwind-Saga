
interface Button {
  value: string
}

export default function Button({ value }: Button): JSX.Element {

  return (
    <button className="
      bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300
      py-2 px-5 text-sm font-medium rounded-full">
      {value}
    </button>
  )
}
