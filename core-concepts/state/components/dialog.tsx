import Button from "./button";

interface TDialog {
  open: boolean,
  handler: () => void
}


export default function Dialog({ open = false, handler = () => null }: TDialog) {

  return (
    <dialog open={open} className="
      bg-gray-50/5
      transition-opacity
      opacity-100
      backdrop-blur-sm
      backdrop-invert
      invisible open:visible 
      flex flex-col justify-center items-center space-y-4
      w-fit h-fit p-6 rounded-lg  
      m-auto -inset-0 z-50
      ">
      <p className="before:block before:absolute before:-inset-1 before:skew-x-3 before:bg-violet-500 before:-z-10 relative text-gray-200 font-extrabold italic" >Greatings, one and all!</p>
      <form method="dialog">
        <Button value="OK, Alright..., cool!" handler={handler} />
      </form>
    </dialog>
  )
} 
