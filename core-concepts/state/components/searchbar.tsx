import { Search } from "@mui/icons-material";



export default function SearchBar() {

  return (
    <label className="relative block min-w-max h-fit">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <Search className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20" />
      </span>
      <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-violet-500 focus:ring-violet-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..." type="text" name="search"
      />
    </label>
  )
}
