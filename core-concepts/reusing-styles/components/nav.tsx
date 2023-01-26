import Link from "next/link";



export function Nav() {

  return (
    <nav className="flex justify-center space-x-4 p-4 bg-slate-900 dark:bg-white w-fit mx-auto mt-4 rounded-md">
      <Link href="/dashboard" className="font-medium px-3 py-2 text-slate-700 rounded-lg  hover:bg-slate-100 hover:text-slate-900">
        Home
      </Link>
      <Link href="/team" className="font-medium px-3 py-2 text-slate-700 rounded-lg  hover:bg-slate-100 hover:text-slate-900">
        Team
      </Link>
      <Link href="/projects" className="font-medium px-3 py-2 text-slate-700 rounded-lg  hover:bg-slate-100 hover:text-slate-900">
        Projects
      </Link>
      <Link href="/reports" className="font-medium px-3 py-2 text-slate-700 rounded-lg  hover:bg-slate-100 hover:text-slate-900">
        Reports
      </Link>
    </nav>
  )
}
