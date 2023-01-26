import Head from 'next/head'
import ContributorCard from '../components/contributor-card'
import { Nav } from '../components/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind starter pack saga</title>
        <meta name="description" content="Tailwind starter pack for Tailwind-Saga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="bg-white dark:bg-black flex justify-evenly items-center p-24 min-h-screen">
        <h1 className="text-orange-500 text-3xl font-bold underline">
          Hello world!
        </h1>
        <ContributorCard />
      </main>
    </>
  )
}
