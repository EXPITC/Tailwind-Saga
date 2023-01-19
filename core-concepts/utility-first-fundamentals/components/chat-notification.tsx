import Image from "next/image";
import { useComponentItemContext } from "../pages/_app";

export default function Notif() {

  const { isComponent } = useComponentItemContext()
  const notif = isComponent!.notif

  return (
    <div className='absolute -top-4 right-0 pr-4 mt-6 overflow-hidden flex flex-col-reverse justify-end  space-y-reverse space-y-5'>
      {notif.map(({ user, preMessage, status }) => {
        return (<div
          key={user}
          className={`
          transition ease-in-out duration-200 ${status ? 'translate-x-96' : 'translate-x-0'}  
          p-6 bg-white rounded-xl shadow-lg
          max-w-sm mx-auto  
          flex items-center space-x-6`}>
          <div className="shrink-0">
            <Image
              className="h-20 w-20 rounded-t-full rounded-br-full rounded-bl-3xl"
              src="https://static.wikia.nocookie.net/lagooncompany/images/1/11/Balalaika.jpg"
              width={500} height={500}
              alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">{user}</div>
            <p className="text-slate-500">{`message: ${preMessage}`}</p>
          </div>
        </div>)
      })
      }
    </div >
  )
}
