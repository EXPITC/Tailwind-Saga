import MiniProfileCard from "./mini-profile-card"

const OPENLEFTNAV = 'translate-x-0'
const CLOSELEFTNAV = '-translate-x-full'
export type typeConditionLeftNav = typeof OPENLEFTNAV | typeof CLOSELEFTNAV

export { OPENLEFTNAV, CLOSELEFTNAV }

export default function LeftNav({ condition = CLOSELEFTNAV }: { condition: typeConditionLeftNav }) {

  // const [isComponent, setComponent] = useComponentItemContext()

  return (
    <nav className={`${condition} overflow-hidden p-3 pl-2 ease-in-out duration-300 absolute z-50 w-80 h-full bg-gradient-to-bl from-purple-600 to-blue-500 rounded-br-3xl rounded-tr-3xl`}>
      <MiniProfileCard />
      <p>This is from nav</p>
    </nav>
  )
}
