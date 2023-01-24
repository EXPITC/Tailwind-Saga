


export default function SocialSecurityNumberInput() {

  return (
    <form className="bg-white p-6 m-auto rounded-md relative">
      <span className="absolute -top-5 left-1 text-sm font-medium dark:text-slate-500">Try to toggel contrast mode in your device</span>
      <label className="block">
        <span className="block  font-medium text-slate-700">Social Security Number</span>
        <input type="number" className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-md w-80" placeholder="000-00-0000" />
        <p className="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
          We need this to steal your indentity.
        </p>
      </label>
    </form>
  )
}
