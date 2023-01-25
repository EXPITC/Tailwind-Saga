import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const imageUrl = "https://images.unsplash.com/photo-1637734433731-621aca1c8cb6"

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind starter pack saga</title>
        <meta name="description" content="Tailwind starter pack for Tailwind-Saga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center p-8 w-screen h-screen">
        <div className="max-w-md sm:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden ring-1 ring-slate-900/5">
          <div className="flex flex-col min-[640px]:flex-row">
            <div className="tablet:shrink-auto">
              <Image className="w-full sm:w-[192px] h-[200px] object-cover object-bottom sm:object-center"
                src={imageUrl} priority width={4000} height={5328} alt="Modern building architecture" />
            </div>
            <div className="p-6 2xl:p-8 space-y-2">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-medium leading-6">Company retreats</div>
              <a href="#" className="block text-base text-slate-900 font-semibold leading-6 hover:underline">Incredible accommondation for your team</a>
              <p className="text-sm text-slate-600 leading-6">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
