import Link from "next/link";

const link = [
  ['Home', '/dashboard'],
  ['Team', '/team'],
  ['Projects', '/projects'],
  ['Reports', '/reports'],
]


export function Nav() {

  return (
    <nav className="flex justify-center space-x-4 p-4 bg-slate-900 dark:bg-white w-fit mx-auto mt-4 rounded-md">
      {
        link.map(([title, url]) => <Link href={url} key={url} className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"> {title} </Link>
        )
      }
    </nav>
  )
}
