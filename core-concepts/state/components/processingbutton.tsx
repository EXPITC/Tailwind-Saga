import { AutoModeRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function ProcessingButton() {

  const [dot, setDot] = useState<string>(".")
  const [disable, setDisable] = useState<boolean>(false)
  const [first, setFirst] = useState<boolean>(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      if (!disable) return
      if (dot === '...') return setDot(".")
      setDot(dot + ".")
    }, 900)

    if (first) {
      setFirst(false)
      setTimeout(() => {
        setDisable(false)
      }, 6000)
    }
    return () => {
      clearTimeout(loadingTimer)
    }
  }, [dot, disable, first])
  return (
    <button type="button" onClick={() => { setDisable(true), setFirst(true) }} className="bg-indigo-500 inline-flex text-center items-center group disabled:pointer-events-none px-6 py-1 rounded-md relative m-auto" disabled={disable} >
      <AutoModeRounded className={`motion-reduce:hidden transition ease-in-out duration-1000 ${disable ? "animate-spin opacity-100 !w-5 mr-1" : "m-0 p-0 !w-0 opacity-0"} h-5`} viewBox="0 0 24 24" />
      <span className={`${disable ? 'w-24 text-left' : 'w-32 text-center'}  motion-safe:ease-in-out truncate duration-700 motion-safe:group-hover:translate-x-2`}>{
        disable ?
          "Processing" + dot : "Click to process"}</span>
    </button>
  )
}
