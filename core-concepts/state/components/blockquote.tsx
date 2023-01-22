


export default function BlockQuote() {

  return (
    <blockquote className="text-2xl font-semibold italic text-center text-slate-900 bg-white p-4 rounded-md min-w-max m-auto">
      When you look{' '}
      <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-500 relative inline-block">
        <span className="relative text-white">annoyed</span>
      </span>
      {' '}all the time,<br /> people think that you're busy.
    </blockquote>
  )
}
