


export default function ListMarker() {

  return (
    <div className="bg-slate-800 p-4 min-w-fit space-y-4 h-fit rounded-md">
      <h2 className="font-semibold text-white">Ingredients</h2>
      <ul role="list" className="marker:text-violet-500 list-disc pl-5 space-y-4">
        <li role="listitem" className="text-slate-400">5 cups chopped Porcini mushrooms</li>
        <li role="listitem" className="text-slate-400">1/2 cup of olive oil</li>
        <li role="listitem" className="text-slate-400">3lb of celery</li>
      </ul>
    </div>
  )
}
