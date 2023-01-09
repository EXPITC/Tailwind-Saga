import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ComponentType, useState } from 'react'
import styles from '../styles/Home.module.css'

const ChatNotif: ComponentType<{}> = dynamic(() => import('../components/chat-notification'), {
  ssr: false,
})

export default function Home() {
  const [isNotif, setNotif] = useState(false)
  return (
    <>
      <Head>
        <title>Tailwind starter pack saga</title>
        <meta name="description" content="Tailwind starter pack for Tailwind-Saga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-orange-500 text-3xl font-bold underline">
          Hello world!
        </h1>
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => {
            setNotif(!isNotif)
          }}>Chat notification</button>
        {isNotif && (
          <ChatNotif />
        )}
      </main>
    </>
  )
}
