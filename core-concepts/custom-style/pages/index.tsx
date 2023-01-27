import Head from 'next/head'
import style from '../styles/Home.module.css'

const dummy = ["Try to hover me", "Try to hover me", "Try to hover me", "Try to hover me"]

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind starter pack saga</title>
        <meta name="description" content="Tailwind starter pack for Tailwind-Saga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main-container'>
        {/* <main className={`${style.flexCol} w-screen h-screen bg-pink justify-center items-center`}> */}
        <h1 className="absolute top-[117px] lg:top-[344px]
          bg-[#bada55] text-[22px] before:content-['Festivus'] border 
          text-gray-dark font-sans text-3xl font-bold underline">
          {' '}Hello world!
        </h1>
        <h2 className="card rounded-lg text-[lenght:22px] text-[color:#bada55] mt-[250px]">Resolve ambiguities</h2>
        <div className="
          [mask-image:url('https://api.iconify.design/whh:skull.svg')] 
          [mask-repeat:no-repeat]
          [mask-size:contain]
          absolute mx-auto top-1
          bg-gradient-to-r from-orange to-pink hover:from-gray-dark
          h-80 w-80">
        </div>
        <ul role='list' >
          {
            dummy.map((i) => <li role='listitem' key={i} className="lg:[&:nth-child(3)]:hover:underline block list-none">{i}</li>)
          }
        </ul>
      </main>
    </>
  )
}
