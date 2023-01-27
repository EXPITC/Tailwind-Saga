import Head from 'next/head'

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
          bg-gradient-to-r from-orange to-pink hover:from-gray-dark
          h-80 w-80">
        </div>
        <ul role='list' className="absolute bottom-40">
          {
            dummy.map((i) => <li role='listitem' key={i} className="lg:[&:nth-child(3)]:hover:underline block list-none">{i}</li>)
          }
        </ul>
      </main>
    </>
  )
}
