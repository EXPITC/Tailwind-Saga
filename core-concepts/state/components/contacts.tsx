import { KeyboardArrowRight } from "@mui/icons-material"
import Image from "next/image"


const dummy = [
  {
    imageUrl: "https://static.wikia.nocookie.net/lagooncompany/images/1/11/Balalaika.jpg",
    name: "Balalaika",
    title: "Veteran of ussr, lead of syndicate.",
    email: "hotelMoscow@lagooncompany.co",
    phone: 123344
  }, {
    imageUrl: "https://i.pinimg.com/564x/05/84/9a/05849aa06041fa18ea36f30b3372b2a3.jpg",
    name: "Kristen Ramos",
    title: "Product Directives Officer",
    email: "kristen.ramos@example.com",
    phone: 133344
  }, {
    imageUrl: "https://i.pinimg.com/564x/7d/0c/74/7d0c74f952f8ba9ed9df2310d51c6481.jpg",
    name: "Floyd Miles",
    title: "Senior Designer",
    email: "floyd.miles@example.com",
    phone: 143344
  }
]

export default function Contacts() {

  return (
    <ul role='list' className="bg-white min-w-fit rounded-md p-3 my-auto max-w-xs" >
      {dummy.map(({ imageUrl, name, title, email, phone }) => {
        return (
          <li key={email} role='listitem' className="group/item hover:bg-slate-100 flex justify-between items-center p-4 min-w-max rounded-2xl ">
            <div className="flex space-x-4 items-center ">
              <Image className="w-10 h-10 rounded-full" src={imageUrl} alt={name} height={40} width={40} />
              <div className="max-w-xs">
                <a className="capitalize font-semibold">{name}</a>
                <p className="text-slate-600 drop-shadow-md font-thin truncate">{title}</p>
              </div>
            </div>
            <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible flex justify-center items-center p-1 px-2 rounded-full" href={`tel: ${phone}`}>
              <span className="group-hover/edit:text-slate-700 text-slate-400 font-normal group-hover/edit:font-semibold transition">Call</span>
              <KeyboardArrowRight className="group-hover/edit:translate-x-0.5 fill-slate-400 group-hover/edit:fill-slate-700 p-0 m-0 transition" />
            </a>
          </li>
        )
      }
      )}
      <div className="group is-published">
        <div className="hidden group-[.is-published]:block">
          Published
        </div>
      </div>
      {/* Can't replicate docs */}
      {/* < div className="group"> */}
      {/*   <div className="group-[:nth-of-type(3)_&]:hidden"> */}
      {/*     {dummy.map(({ name }) => { */}
      {/*       return ( */}
      {/*         <> */}
      {/*           <p>{name}</p> */}
      {/*         </> */}
      {/*       ) */}
      {/*     })} */}
      {/*   </div> */}
      {/* </div> */}
    </ul>
  )
}
