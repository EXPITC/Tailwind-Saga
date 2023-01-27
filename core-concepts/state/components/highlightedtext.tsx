import { SwipeDown } from "@mui/icons-material";



export default function HighlightText() {

  return (
    <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900 bg-slate-800 p-4 space-y-4 rounded-md m-auto min-w-fit">
      <span className="block text-white font-normal items-center">
        <SwipeDown className="fill-white w-5 mr-1 -inset-1 m-auto" />
        Try selecting some of this text with your mouse.
      </span>
      <p className="text-slate-400 max-w-md text-left">
        So I started to walk into the water. I won&apos;t lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers
        a strange calm came over me. I don&apos;t know if it was divine intervention
        or the kinship of all living things but I tell you Jerry at that moment,
        I <em className="text-slate-400">was</em> a marine biologist.
      </p>
    </div>
  )
}
