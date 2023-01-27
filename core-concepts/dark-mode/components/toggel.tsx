import { Brightness2, LightMode } from "@mui/icons-material";
import { useEffect, useState } from "react";

export const antiFlickerDarkMode = `(function(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
})()`

export default function Toggel() {

  const [dark, setDark] = useState<boolean | 'first'>('first')
  const [os, setOs] = useState<boolean | undefined>(undefined)

  useEffect(() => {

    console.log(os)
    // Initiate first mode
    if (os === undefined) {
      localStorage.removeItem('theme')
      if (dark === 'first') {
        // Pass
      } else {
        setOs(dark)
      }
    } else if (dark) {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }
    console.log(window.matchMedia('(prefers-color-scheme: dark)'))
    // Adjust mode by initiated state
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [dark, os])


  return (
    <button onClick={() => setDark(!dark)} type="button" className="absolute group right-24 top-12 w-10 h-10 rounded-lg overflow-hidden">
      <div className={`w-full h-fit p-0 m-0 
        transition delay-150 ease-in-out duration-500
        ${dark === 'first' ? '' : dark ? MoonSunStyle(os, 1) + '  bg-white' : MoonSunStyle(os, 2) + ' bg-slate-900'}
        [&_div]:w-10 [&_div]:h-10 [&_div]:flex [&_div]:items-center 
        [&_svg]:w-6 [&_svg]:h-auto [&_svg]:transition-all [&_svg]:ease-in-out [&_svg]:duration-300 [&_svg]:group-active:w-6 [&_svg]:group-hover:w-8 [&_svg]:m-auto`}>
        <div>
          <MoonSun dark={!!os} />
        </div>
        <div>
          <MoonSun dark={!os} />
        </div>
      </div>
    </button >
  )
}

interface MoonSunType {
  dark: boolean | string
}

function MoonSun({ dark }: MoonSunType) {

  if (typeof dark === 'string') return (<></>)
  return dark ? <Brightness2 className="!fill-slate-900" /> : <LightMode className="!fill-white" />
}

function MoonSunStyle(dark: boolean | undefined, type: 1 | 2) {

  if (dark === undefined) return ''
  if (dark) {
    if (type === 1) return 'translate-y-0'
    return '-translate-y-10'
  }

  if (type === 1) return '-translate-y-10'
  return 'translate-y-0'
}
