import { SwipeLeft } from '@mui/icons-material'
import Head from 'next/head'
import Button from '../components/button'
import FormLogin from '../components/form-login'
import Inbox from '../components/inbox'
import NewProjectButton from '../components/newProject-button'
import Contacts from '../components/contacts'
import Table from '../components/table'
import Peer from '../components/peer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind starter pack saga</title>
        <meta name="description" content="Tailwind starter pack for Tailwind-Saga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between space-y-4 min-h-screen p-24 items-center">
        <h1 className="text-orange-500 text-3xl font-bold underline">
          Hello world!
          <SwipeLeft className="fill-white pl-1 text-2xl" />
        </h1>
        <div className={`w-full flex p-4 space-x-3 overflow-x-scroll ${styles.scrollbarHide} rounded-md `}>
          <FormLogin />
          <Inbox />
          <Table />
          <NewProjectButton />
          <Contacts />
          <Peer />
        </div>
        <Button value="Save changes" />
      </main>
    </>
  )
}
