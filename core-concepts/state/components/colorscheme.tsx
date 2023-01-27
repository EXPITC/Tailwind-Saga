import { RateReviewRounded } from "@mui/icons-material";



export default function ColorScheme() {

  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl min-w-fit h-fit relative">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <RateReviewRounded className="h-6 w-6 !fill-white" viewBox="0 0 24 24" stroke="white" aria-hidden />
        </span>
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
      <p className="text-sky-500 dark:text-slate-400 mt-2 text-sm max-w-xs">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
      <span className="text-indigo-500 dark:text-violet-500 text-xs font-thin">Trying to switch ur device between darkmode</span>
    </div>
  )
}
