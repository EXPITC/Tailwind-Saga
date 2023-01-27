import Head from 'next/head'
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
      <main className="w-screen h-screen bg-pink flex justify-center">
        <h1 className="absolute top-[117px] lg:top-[344px]
          bg-[#bada55] text-[22px] before:content-['Festivus'] 
          text-gray-dark font-sans text-3xl font-bold underline">
          {' '}Hello world!
        </h1>
        <div className="
          [mask-image:url('https://api.iconify.design/whh:skull.svg')] 
          [mask-repeat:no-repeat]
          [mask-size:contain]
          bg-gradient-to-r from-orange to-pink
          h-80 w-80">
        </div>
      </main>
    </>
  )
}
