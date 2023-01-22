import { useState } from "react"




export default function Peer() {
  const [value, setValue] = useState("Hotel@moscow.")

  return (
    <div className="flex flex-col m-auto space-y-4">
      <form className="bg-white p-4 mx-auto my-auto min-w-fit rounded-md">
        <label htmlFor="email" className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
          <input value={value} onChange={(e) => setValue(e.target.value)} type="email" id="email" placeholder="Hotel@Moscow" className="
          peer 
          bg-white border border-slate-300 rounded-md p-2 mt-1 text-black text-sm placeholder-slate-400
          focus:outline focus:border-purple-500 focus:ring-1 focus:ring-purple-500
          invalid:border-pink-500 invalid:text-pink-500
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          " />
          <p className="invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email address.</p>
        </label>
        {/* It can also do arbitary peer */}
      </form>
      <fieldset className="bg-white p-4 rounded-md">
        <div className="py-2 mb-5 border-b border-slate-200 w-96">
          <legend className="text-slate-700">Published status</legend>
        </div>

        <input id="draft" className="peer/draft mr-2 mb-0.5 text-violet-500 border-slate-300 focus:ring-violet-500" type="radio" name="status" defaultChecked />
        <label htmlFor="draft" className="peer-checked/draft:text-violet-500">Draft</label>

        <input id="published" className="peer/published mr-2 mb-0.5 ml-4 text-violet-500 border-slate-300 focus:ring-violet-500" type="radio" name="status" />
        <label htmlFor="published" className="peer-checked/published:text-violet-500">Published</label>

        <div className="hidden peer-checked/draft:block text-gray-500">Drafts are only visible to administrators.</div>
        <div className="hidden peer-checked/published:block text-gray-500">Your post will be publicly visible on your site.</div>
      </fieldset>
    </div>
  )
}
