// import '../styles/globals.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useContext, useState } from 'react'


const initValueComponentItem: initValueComponentItem = {
  leftNav: false,
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

  return (
    <ComponentItemContext.Provider value={{ isComponent, setComponent }}>
      <Component {...pageProps} />
    </ComponentItemContext.Provider>
  )
}
