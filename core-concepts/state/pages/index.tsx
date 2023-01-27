import { SwipeLeft } from '@mui/icons-material'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

// First component render
import Button from '../components/button'
import FormLogin from '../components/form-login'
import Inbox from '../components/inbox'
import Table from '../components/table'
import Dialog from '../components/dialog'

// Out frame or rendered components
const opt: { ssr: boolean } = {
  ssr: false
}
function get(components: string) {
  return import(`../components/${components}`)
}
const NewProjectButton = dynamic(get('newProject-button'), { ...opt })
const Contacts = dynamic(get('contacts'), { ...opt })
const Peer = dynamic(get('peer'), { ...opt })
const BlockQuote = dynamic(get('blockquote'), { ...opt })
const SearchBar = dynamic(get('searchbar'), { ...opt })
const FileInputProfile = dynamic(get('fileinputprofile'), { ...opt })
const ListMarker = dynamic(get('listmarker'), { ...opt })
const HighlightText = dynamic(get('highlightedtext'), { ...opt })
const Letter = dynamic(get('letter'), { ...opt })
const Grid = dynamic(get('grid'), { ...opt })
const ColorScheme = dynamic(get('colorscheme'), { ...opt })
const ProcessingButton = dynamic(get('processingbutton'), { ...opt })
const SocialSecurityNumberInput = dynamic(get('socialsecuritynumber-input'), { ...opt })
const ViewPortComponent = dynamic(get('viewportcomponent'), { ...opt })
const RtlProfile = dynamic(get('rtlprofile'), { ...opt })
const Summary = dynamic(get('summary'), { ...opt })


export default function Home() {

  const [isDialog, setDialog] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>Tailwind starter pack saga</title>
        <meta name="description" content="Tailwind starter pack for Tailwind-Saga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dialog open={isDialog} handler={() => setDialog(false)} />
      <main className="flex flex-col justify-between space-y-4 min-h-screen p-24 items-center">
        <h1 className="text-orange-500 text-3xl font-bold underline">
          Hello world!
          <SwipeLeft className="!fill-black dark:!fill-white pl-1 text-2xl" />
        </h1>
        <div className={`w-full flex p-4 space-x-3 bg-grey-700 shadow-zinc-700 overflow-x-scroll ${styles.scrollbarHide} rounded-md `}>
          <FormLogin />
          <Inbox />
          <Table />
          <NewProjectButton />
          <Contacts />
          <Peer />
          <BlockQuote />
          <SearchBar />
          <FileInputProfile />
          <ListMarker />
          <HighlightText />
          <Letter />
          <Grid />
          <ColorScheme />
          <ProcessingButton />
          <SocialSecurityNumberInput />
          <ViewPortComponent />
          <RtlProfile />
          <Summary />
        </div>
        <Button value="Save changes" handler={() => setDialog(true)} />
      </main>
    </>
  )
}
