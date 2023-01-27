import { RateReviewRounded } from '@mui/icons-material'

interface props {
  dark?: boolean | 'os'
}

export default function DarkModeCard({ dark = 'os' }: props) {


  return (
    <div className={`${dark != 'os' && dark ? 'dark' : ''}`}>
      <div className={`max-w-sm bg-white ${dark ? 'dark:bg-slate-800' : ""} rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}>
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <RateReviewRounded className="!fill-white !h-6 !w-6" viewBox="0 0 24 24" />
          </span>
        </div>
        <h3 className={`
        text-slate-900 ${dark ? 'dark:text-white' : ""} mt-5 text-base font-medium tracking-tight
        `}>Writes Upside-Down</h3>
        <p className={`text-slate-500 ${dark ? 'dark:text-slate-400' : ""} mt-2 text-sm`}>
          The Zero Gravity Pen can be used to write in any orientation, including upside-down.
          It even works in outer space.
        </p>
      </div>
    </div >
  )
}
