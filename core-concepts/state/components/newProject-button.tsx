import { PostAddRounded } from '@mui/icons-material';

export default function NewProjectButton() {

  return (
    <a href="#" className="group block max-w-xs mx-auto h-fit rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
      <div className="flex items-center space-x-3">
        <PostAddRounded className="fill-sky-500 group-hover:fill-white" viewBox="0 0 24 24" />
        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New Project</h3>
      </div>
      <p className="text-slate-500 group-hover:text-white text-sm w-72">Create a new project from a variety of starting templates.</p>
    </a>
  )
}
