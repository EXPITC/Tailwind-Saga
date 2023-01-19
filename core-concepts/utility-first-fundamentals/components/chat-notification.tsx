import { LoaderComponent } from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useComponentItemContext } from "../pages/_app";

export default function Notif() {

  const { isComponent } = useComponentItemContext()
  const notif = isComponent!.notif

  return (
    <>
      {notif.map(({ user, preMessage }) => {
        return (<div
          key={user}
          className="
          absolute top-4 right-4
          ease-in
          p-6 bg-white rounded-xl shadow-lg
          max-w-sm mx-auto  
          flex items-center space-x-6">
          <div className="shrink-0">
            <Image
              className="h-20 w-20 rounded-t-full rounded-br-full rounded-bl-3xl"
              src="https://static.wikia.nocookie.net/lagooncompany/images/1/11/Balalaika.jpg"
              width={500} height={500}
              alt="ChitChat Logo" />
          </div>
          <div>
            {/* <div className="text-xl font-medium text-black">ChitChat</div> */}
            <div className="text-xl font-medium text-black">{user}</div>
            <p className="text-slate-500">{preMessage}</p>
          </div>
        </div>)
      })
      }
    </>
  )
}
