import Image from "next/image";

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
    imageUrl: "https://i.pinimg.com/564x/f3/64/98/f364983c124cd6115370817e788423ff.jpg",
    name: "くりくり",
    email: "kuri.kuri@example.jp"
  }, {
    imageUrl: "https://i.pinimg.com/564x/b3/8e/7d/b38e7da4957b2fbc5f7224d14939b1df.jpg",
    name: "Courtney Henry",
    email: "courtney.henry@example.com"
  }, {
    imageUrl: "https://i.pinimg.com/564x/97/cb/d3/97cbd3a5c542b00e95ddd211cf2c4d3d.jpg",
    name: "Ted Fox",
    email: "ted.fox@example.com"
  }, {
    imageUrl: "https://i.pinimg.com/564x/7d/0c/74/7d0c74f952f8ba9ed9df2310d51c6481.jpg",
    name: "Floyd Miles",
    email: "floyd.miles@example.com"
  }
]


export default function ContributorCard() {

  return (
    <div className="bg-slate-900 dark:bg-white p-8 rounded-md w-96">
      <div className="flex items-center space-x-2 text-base">
        < h4 className="font-semibold text-slate-900" > Contributors</h4 >
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
      </div >
      <div className="mt-3 flex -space-x-2 overflow-hidden">
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" width={48} height={48} src={dummy[0].imageUrl} alt={dummy[0].name} />
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" width={48} height={48} src={dummy[1].imageUrl} alt={dummy[1].name} />
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" width={48} height={48} src={dummy[2].imageUrl} alt={dummy[2].name} />
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" width={48} height={48} src={dummy[3].imageUrl} alt={dummy[3].name} />
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" width={48} height={48} src={dummy[4].imageUrl} alt={dummy[4].name} />
      </div>
      <div className="mt-3 text-sm font-medium">
        <a href="#" className="text-blue-800">+ 198 others</a>
      </div>
    </div >
  )
}
