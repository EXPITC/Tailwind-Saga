import Head from 'next/head'
import DarkModeCard from '../components/darkmode-card'
import Toggel, { antiFlickerDarkMode } from '../components/toggel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind starter pack saga</title>
        <meta name="description" content="Tailwind starter pack for Tailwind-Saga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: antiFlickerDarkMode
        }}
      />
      <main className="bg-white dark:bg-black flex flex-col justify-between items-center p-24 min-h-screen">
        <Toggel />
        <DarkModeCard />
        <div className="flex space-x-24 [&_p]:p-4">
          <div>
            <p className="text-slate-900 dark:text-white">Light mode</p>
            <DarkModeCard dark={false} />
          </div>
          <div>
            <p className="text-right text-slate-900 dark:text-white">Dark mode</p>
            <DarkModeCard dark={true} />
          </div>
        </div>
      </main>
    </>
  )
}
