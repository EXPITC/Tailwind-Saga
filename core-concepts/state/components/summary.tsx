


export default function Summary() {

  return (
    <div className="mx-auto p-8 bg-none min-w-max">
      <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/20 open:shadow-lg p-6 rounded-lg"
      >
        <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
          Why do they call it Ovaltine?
        </summary>
        <div className="mt-3 text-sm leading-6 [&_p]:text-slate-600 dark[&_p]:text-slate-400">
          <p>The mug is round. The jar is round. They should call it Roundtine.</p>
        </div>
      </details>
    </div>
  )
}
