import React from 'react'

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <div className="bg-white rounded-2xl border border-slate-100/90 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] p-6 sticky top-24 transition-all">
      <h2 className="font-bold text-xl text-slate-900 tracking-tight">
        Your Stack
      </h2>
      <p className="text-slate-400 text-sm mt-1 mb-6">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="border border-dashed border-sky-200/90 rounded-2xl py-12 px-4 flex items-center justify-center text-center">
          <p className="text-slate-400 text-sm font-normal">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div>
          <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="border border-slate-200/90 rounded-xl p-3 flex items-center justify-between bg-white hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {item.category}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(item.id, item.name)}
                  className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg p-1.5 transition-colors cursor-pointer"
                  title={`Remove ${item.name} from stack`}
                  aria-label={`Remove ${item.name}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="w-full mt-6 py-2.5 px-4 rounded-xl border border-red-200 text-red-500 hover:bg-red-50/70 hover:border-red-300 font-semibold text-sm transition-all duration-200 cursor-pointer text-center"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  )
}
