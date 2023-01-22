import Image from "next/image";
import { ChangeEvent, useState } from "react";




export default function FileInputProfile() {

  const [value, setValue] = useState<string>('https://static.wikia.nocookie.net/lagooncompany/images/1/11/Balalaika.jpg')

  function profileHandler(e: ChangeEvent<HTMLInputElement>) {
    if (!!!e.target.files) return
    setValue(URL.createObjectURL(e.target.files![0]))
  }

  return (
    <form className="bg-white flex items-center space-x-6 min-w-fit p-4 rounded-md m-auto">
      <div className="shrink-0">
        <Image
          className="h-16 w-16 object-cover rounded-full"
          src={value}
          alt="profile"
          width={64} height={64}
        />
      </div>
      <label className="block">
        <span>Choose profile photo</span>
        <input type="file" className="block w-full text-sm text-slate-500 focus:outline-none
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "
          onChange={profileHandler}
        />
      </label>
    </form>
  )
}
