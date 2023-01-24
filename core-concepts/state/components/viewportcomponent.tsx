


export default function ViewPortComponent() {

  return (
    <div className="bg-slate-800 dark:bg-white shdaow-lg p-6 rounded-md flex justify-center items-center min-w-max m-auto">
      <div className="portrait:hidden w-48 text-center font-semibold tracking-widest">
        <p className="drop-shadow">
          This experience is designed to be viewed in portrait.
          Please rotate your device to view the landscape content.
        </p>
      </div>
      <div className="landscape:hidden w-48 text-center font-semibold tracking-widest">
        <p className="drop-shadow">
          This experience is designed to be viewed in landscape.
          Please rotate your device to view the portrait content.
        </p>
      </div>
    </div>
  )
}
