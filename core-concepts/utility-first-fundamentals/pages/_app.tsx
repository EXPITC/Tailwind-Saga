// import '../styles/globals.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'

// type initLefNav = boolean
// type initNotif = [{
//   user: string,
//   preMessage: string
// }] | []
//
// const initLefNav: initLefNav = false
// const initNotif: initNotif = []
//
// const initValue = {
//   initLefNav,
//   initNotif,
//   isLeftNav: initLefNav,
//   setLeftNav: () => { },
//   isNotif: initNotif,
//   setNotif: () => { }
// }
//
// type initValue = {
//   initLefNav: initLefNav,
//   setLeftNav: Dispatch<SetStateAction<initLefNav>>,
//   initNotif: initNotif,
//   setNotif: Dispatch<SetStateAction<initNotif>>
// }

// interface componentItemContextType {
//   isLeftNav: boolean,
//   setLeftNav: Dispatch<SetStateAction<initLefNav>>,
//   isNotif: initNotif,
//   setNotif: Dispatch<SetStateAction<initNotif>>,
// }

const initValueComponentItem: initValueComponentItem = {
  leftNav: true,
  notif: []
}

type initValueComponentItem = {
  leftNav: boolean,
  notif: {
    user: string,
    preMessage: string
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

  return (
    <ComponentItemContext.Provider value={{ isComponent, setComponent }}>
      <Component {...pageProps} />
    </ComponentItemContext.Provider>
  )
}
