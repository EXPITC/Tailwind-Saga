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
import BlockQuote from '../components/blockquote'
import SearchBar from '../components/searchbar'
import FileInputProfile from '../components/fileinputprofile'
import ListMarker from '../components/listmarker'
import HighlightText from '../components/highlightedtext'
import Letter from '../components/letter'
import { useState } from 'react'
import Dialog from '../components/dialog'
import Grid from '../components/grid'
import ColorScheme from '../components/colorscheme'
import ProcessingButton from '../components/processingbutton'
import SocialSecurityNumberInput from '../components/socialsecuritynumber-input'
import ViewPortComponent from '../components/viewportcomponent'
import RtlProfile from '../components/rtlprofile'

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
          <SwipeLeft className="fill-black dark:fill-white pl-1 text-2xl" />
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
        </div>
        <Button value="Save changes" handler={() => setDialog(true)} />
      </main>
    </>
  )
}
