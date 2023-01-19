import dynamic, { LoaderComponent } from 'next/dynamic'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import MiniProfiCard from '../components/mini-profile-card'
import LeftNav, { CLOSELEFTNAV, typeConditionLeftNav, OPENLEFTNAV } from '../components/left-navbar'
import { useComponentItemContext } from './_app'

const ChatNotif = dynamic((): LoaderComponent => import('../components/chat-notification'),
  {
    ssr: false
  })

// const LeftNav: ComponentType<{ condition: typeConditionLeftNav }> = dynamic(() => import('../components/left-navbar'), {
//   ssr: false,
// })


export default function Home() {

  const [isLeftNav, setLeftNav] = useState<typeConditionLeftNav>(CLOSELEFTNAV)
  const { isComponent } = useComponentItemContext()
  // const [notif, setNotif] = useState<number[]>([])

  return (
    <>
      <Head>
        <title>Tailwind starter pack saga</title>
        <meta name="description" content="Tailwind starter pack for Tailwind-Saga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-gradient-to-r from-slate-700 to-black">
        <LeftNav condition={isLeftNav} />
        <main className={styles.main + ' w-full'}>
          <h1 className="text-orange-500 text-3xl font-bold underline">
            Hotel Moscow
          </h1>
          <MiniProfiCard />
          <button className="
            font-medium text-sm text-white 
            rounded-lg px-5 py-2.5 text-center mr-2 mb-2
            bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-tl 
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 "
            onClick={() => {
              setLeftNav(isLeftNav === OPENLEFTNAV ? CLOSELEFTNAV : OPENLEFTNAV)
            }}>Slide</button>
          {isComponent!.notif.length > 0 && <ChatNotif />}
        </main>
      </div>
    </>
  )
}
