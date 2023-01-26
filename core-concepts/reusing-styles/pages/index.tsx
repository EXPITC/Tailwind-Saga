import Head from 'next/head'
import Btn from '../components/btn'
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
      <main className="main">
        <Nav />
        <h1 className="hello-world">
          Hello world!
        </h1>
        <ContributorCard />
        <Btn />
      </main>
    </>
  )
}
