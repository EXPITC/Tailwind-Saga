import Head from 'next/head'
import Button from '../components/button'
import FormLogin from '../components/form-login'
import Inbox from '../components/inbox'
import Table from '../components/table'
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
      <main className={styles.main}>
        <h1 className="text-orange-500 text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className="w-auto flex space-x-3">
          <FormLogin />
          <Inbox />
          <Table />
        </div>
        <Button value="Save changes" />
      </main>
    </>
  )
}
