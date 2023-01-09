import Image from "next/image";

export default function ChatNotification(): JSX.Element {

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-6">
      <div className="shrink-0">
        <Image className="h-20 w-20 rounded-t-full rounded-br-full rounded-bl-3xl" src="/images/BalalaikaProfile500.jpg" width={500} height={500} alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  )
}
