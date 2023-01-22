

const dummy = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    email: "cody.fisher@example.com",
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
  },
  {
    name: "Emily Selman",
    title: "VP, Hardware Engineering",
    email: "emily.selman@example.com",
  },
  {
    name: "Anna Roberts",
    title: "Chief Startegy Officer",
    email: "anna.roberts@example.com",
  },
]


export default function Table() {

  return (
    <div className="bg-white min-w-max rounded-md overflow-hidden">
      <table className="w-full h-full rounded-md text-left text-black" >
        <thead className="bg-slate-50 h-14 border-b border-slate-200 ">
          <tr className="only:w-44">
            <th className="px-2">Name</th>
            <th className="px-2">Title</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="">
          {
            dummy.map(({ name, title, email }) => {
              return (
                <tr key={email} className="odd:bg-white even:bg-slate-50">
                  <td className="px-2">{name}</td>
                  <td className="px-2">{title}</td>
                  <td className="px-2">{email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
