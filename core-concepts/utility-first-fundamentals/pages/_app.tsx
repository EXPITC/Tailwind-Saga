// import '../styles/globals.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useContext, useEffect, useState } from 'react'


const initValueComponentItem: initValueComponentItem = {
  leftNav: true,
  notif: [],
}

type initValueComponentItem = {
  leftNav: boolean,
  notif: {
    user: string,
    preMessage: string
    status: boolean
  }[]
}
interface TypeComponentItemContext extends Partial<initValueComponentItem> {
  isComponent?: typeof initValueComponentItem
  setComponent?: (props: initValueComponentItem) => void
}

const ComponentItemContext = createContext<TypeComponentItemContext | undefined>(initValueComponentItem)

export const useComponentItemContext = () => {
  const componentItemContext = useContext(ComponentItemContext)
  if (!componentItemContext) throw new Error(
    'No ComponentItemContext.Provider found when calling useComponentItemContext'
  )
  return componentItemContext
}

export default function App({ Component, pageProps }: AppProps) {
  const [isComponent, setComponent] = useState<initValueComponentItem>(initValueComponentItem)

  useEffect(() => {
    const notifStatus = isComponent.notif.length > 0
    const timerNotif = setTimeout(() => {
      setComponent({
        ...isComponent,
        notif: [
          ...isComponent.notif.filter((_, index, arr) => index != (arr.length - 1))
        ]
      })
      console.log("Notif remove")
    }, 2000)
    const timerNotifII = setTimeout(() => {
      setComponent({
        ...isComponent,
        notif: [
          ...isComponent.notif.map((c, i, arr) => {
            if (i === (arr.length - 1)) {
              return {
                ...c,
                status: false
              }
            }
            return c
          })
        ]
      })
      console.log("Slide in")
    }, 200)

    // const timerNotifII: ReturnType<typeof setTimeout | any> = (status: boolean) => {
    //   if (!status) return undefined
    //   console.log(notifStatus)
    //   console.log("still hit")
    //   return (
    //     setTimeout(() => {
    //       setComponent({
    //         ...isComponent,
    //         notif: [
    //           ...isComponent.notif.map((c, i, arr) => {
    //             if (i === (arr.length - 0)) {
    //               return {
    //                 ...c,
    //                 status: false
    //               }
    //             }
    //             return c
    //           })
    //         ]
    //       })
    //       console.log("HAHAHA")
    //     }, 600)
    //   )
    // }
    // // timerNotifII(isComponent.notif.length > 0)
    console.log(notifStatus)
    return (() => {
      clearTimeout(timerNotif)
      clearTimeout(timerNotifII)
    })
  }, [isComponent.notif.length])

  return (
    <ComponentItemContext.Provider value={{ isComponent, setComponent }}>
      <Component {...pageProps} />
    </ComponentItemContext.Provider>
  )
}
