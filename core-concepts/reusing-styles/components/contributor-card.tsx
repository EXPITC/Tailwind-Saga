import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

function ImageLoading() {
  return <div className="contributor-image"></div>
}


export default function ContributorCard() {

  const [isLoad, setLoad] = useState<boolean>(true)

  return (
    <div className="contributor-container">
      <div className="contributor-information">
        < h4 className="contributor-h4" > Contributors</h4 >
        <span className="contributor-span">204</span>
      </div >
      <div className="contributor-image-container">
        {
          dummy.map(({ imageUrl, name, email }) => <Image onLoadingComplete={() => setLoad(false)} className={`${isLoad ? 'animate-pulse' : ''} bg-slate-300 contributor-image`} width={48} height={48} src={imageUrl} alt={name} key={email} />
          )
        }
      </div>
      <div className="contributor-link-container">
        <Link href="/" className="contributor-link">+ 198 others</Link>
      </div>
    </div >
  )
}
