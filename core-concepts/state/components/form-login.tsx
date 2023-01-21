import { ChangeEvent, useState } from "react"
import Button from "./button"

type inputList = {
  span: string,
  type: string,
  disable: boolean
}[]

type value = {
  name: string,
  email: string,
  password: string
}

const inputList: inputList = [
  {
    span: 'Username',
    type: 'name',
    disable: true
  },
  {
    span: 'Email',
    type: 'email',
    disable: false
  },
  {
    span: 'Password',
    type: 'password',
    disable: false
  },
]

export default function FormLogin() {

  const [value, setValue] = useState<value>({
    name: 'tbone',
    email: 'george@krugerindustrial.',
    password: '12345'
  })

  const handlerChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({
      ...value,
      [e.target.type]: e.target.value
    })
  }
  // Change button to right form
  return (
    <form className="bg-white rounded-md w-72 p-4 space-y-4 my-auto">
      {
        inputList.map(({ span, type, disable }) => {
          return (
            <label className="block" key={type}>
              <span className="block text-sm font-medium text-slate-700">{span}</span>
              <input type={type} required={false} value={value[type as keyof value]} onChange={handlerChange} disabled={disable} className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-black text-sm placeholder-slate-400
              focus:outline focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disable:border-slate-200 disable:shadow-none
              invalid:border-pink-500 invalid:text-pink-500
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              required:border-pink-500
            "/>
            </label>
          )
        })
      }
      <div className="text-right" >
        <Button value="Save changes" type="submit" />
      </div>
    </form>
  )
}
