
interface Button {
  value: string
}

export default function Button({ value }: Button): JSX.Element {

  return (
    <button className="
      dark:md:hover:bg-fuchsia-600
      bg-sky-500 hover:bg-sky-700 
      py-2 px-5 text-sm font-medium rounded-full">
      {value}
    </button>
  )
}
