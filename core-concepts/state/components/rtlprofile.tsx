import Image from "next/image"

const dummy = [
  {
    imageUrl: "https://static.wikia.nocookie.net/lagooncompany/images/1/11/Balalaika.jpg",
    name: "Balalaika",
    title: "Veteran of ussr, lead of syndicate.",
    rtl: false
  }, {
    imageUrl: "https://i.pinimg.com/564x/05/84/9a/05849aa06041fa18ea36f30b3372b2a3.jpg",
    name: "كريستيان راموس",
    title: "مسؤول توجيهات المنتج",
    rtl: true
  }
]

export default function RtlProfile() {

  return (
    <div className="bg-white dark:bg-slate-900 shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 rounded-md min-w-max m-auto">
      {
        dummy.map(({ imageUrl, name, title, rtl }) => {
          return (
            <div dir={rtl ? "rtl" : "ltr"} key={name}>
              <p className="mb-4 text-sm font-medium text-slate-500">{rtl ? 'Right-to-left' : 'Left-to-right'}</p>
              <div className="group flex items-center">
                <Image className="
                shrink-0 h-12 w-12 rounded-full
                "
                  src={imageUrl} width={24} height={24} alt={name} />
                <div className="ltr:ml-3 rtl:mr-3">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white">{name}</p>
                  <p className="text-sm font-medium text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-300">{title}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
