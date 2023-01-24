
const dummy = [0, 1, 2, 3, 4, 5]


export default function Grid() {

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 bg-white min-w-fit  m-auto rounded-md p-4">
      {
        dummy.map((i) => {
          return (
            <div key={i} className="bg-orange-200 m-2 h-12 w-12 
                rounded-md
                flex justify-center items-center 
              " >
              <span>{i}</span>
            </div>
          )
        })
      }
    </div>
  )
}
