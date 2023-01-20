import MiniProfileCard from "./mini-profile-card"
import { MenuRounded } from '@mui/icons-material'
import { useComponentItemContext } from "../pages/_app"

const OPENLEFTNAV = 'translate-x-0'
const CLOSELEFTNAV = '-translate-x-full'

export default function LeftNav() {

  const { isComponent, setComponent } = useComponentItemContext()
  const navStatus = isComponent!.leftNav ? OPENLEFTNAV : CLOSELEFTNAV
  const navToggel = () => setComponent?.({ ...isComponent!, leftNav: !isComponent!.leftNav })

  return (
    <>
      <nav className={`${navStatus} left-0 top-0 overflow-hidden p-3 pl-2 pt-14 ease-in-out duration-300 absolute z-50 w-80 h-full bg-gradient-to-bl from-purple-600 to-blue-500 rounded-br-3xl rounded-tr-3xl`}>
        <MiniProfileCard />
        <p>This is from nav</p>
      </nav>
      <MenuRounded
        onClick={navToggel}
        className="text-slate-300 text-4xl absolute z-50 top-2 left-2" />
    </>
  )
}
