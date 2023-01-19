import Image from "next/image";
import { useState } from "react";
import { useComponentItemContext } from "../pages/_app";

export default function MiniProfileCard() {

  const [num, setNum] = useState<number>(0)
  const n = useComponentItemContext()
  const isComponent = n.isComponent
  const setComponent = n!.setComponent
  const notif = isComponent!.notif

  return (
    <div
      className="
      py-8 px-8 max-w-full mx-auto bg-white rounded-xl shadow-lg space-y-2 
      sm:py-2 sm:flex sm:items-center sm:space-x-6">
      <Image
        className="block mx-auto h-24 rounded-full
        sm:mx-0"
        priority={true}
        src="/images/BalalaikaProfile500.jpg"
        width={96} height={96}
        alt="Profile" />
      <div
        className="text-center space-y-2
        sm:text-left">
        <div className="space-y-2">
          <p className="text-lg leading-none font-semibold text-black">
            Balalaika<br />
            <i className="text-sm text-slate-400">Sofiya Pavlovna</i>
          </p>
          <p className="text-slate-500 font-medium">
            Leader of Hotel Moscow
          </p>
        </div>
        <button
          onClick={() => {
            setComponent?.({
              ...isComponent!,
              notif: [
                ...notif,
                {
                  user: `#user ${num}`,
                  preMessage: `heelno ${num}`,
                  status: true
                }
              ]
            })
            setNum(num + 1)
          }}
          className="
          px-4 py-1
          text-sm text-purple-600 font-semibold
          rounded-full border border-purple-200
          hover:text-white hover:bg-purple-600 hover:border-transparent
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
          "
        >
          Message</button>
      </div>
    </div>
  )
}
