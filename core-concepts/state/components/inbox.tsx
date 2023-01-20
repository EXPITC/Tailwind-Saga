import Image from "next/image"

const dummy = [
  {
    imageUrl: "https://static.wikia.nocookie.net/lagooncompany/images/1/11/Balalaika.jpg",
    name: "Balalaika",
    email: "hotelMoscow@lagooncompany.co"
  }, {
    imageUrl: "https://i.pinimg.com/564x/05/84/9a/05849aa06041fa18ea36f30b3372b2a3.jpg",
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com"
  }, {
    imageUrl: "https://i.pinimg.com/564x/7d/0c/74/7d0c74f952f8ba9ed9df2310d51c6481.jpg",
    name: "Floyd Miles",
    email: "floyd.miles@example.com"
  }, {
    imageUrl: "https://i.pinimg.com/564x/b3/8e/7d/b38e7da4957b2fbc5f7224d14939b1df.jpg",
    name: "Courtney Henry",
    email: "courtney.henry@example.com"
  }, {
    imageUrl: "https://i.pinimg.com/564x/97/cb/d3/97cbd3a5c542b00e95ddd211cf2c4d3d.jpg",
    name: "Ted Fox",
    email: "ted.fox@example.com"
  }, {
    imageUrl: "https://i.pinimg.com/564x/f3/64/98/f364983c124cd6115370817e788423ff.jpg",
    name: "くりくり",
    email: "kuri.kuri@example.jp"
  }
]

export default function Inbox() {

  return (
    <ul role="list" className="bg-white rounded-md p-6 divide-y divide-slate-200">
      {dummy.map(({ imageUrl, name, email }) => {
        return (
          <li role="listitem" className="flex py-4 first:pt-0 last:pb-0">
            <Image className="h-10 w-10 border border-slate-200 rounded-full" width={40} height={40} src={imageUrl} alt={name} />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">{name}</p>
              <p className="text-sm text-slate-500 truncate" >{email}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
