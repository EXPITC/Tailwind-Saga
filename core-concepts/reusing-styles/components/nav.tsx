import Link from "next/link";

const link = [
  ['Home', '/dashboard'],
  ['Team', '/team'],
  ['Projects', '/projects'],
  ['Reports', '/reports'],
]


export function Nav() {

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {
          link.map(([title, url]) => <Link href={url} key={url} className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"> {title} </Link>
          )
        }
      </nav>
    </div>
  )
}
