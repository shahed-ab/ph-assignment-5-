import React from 'react'

export default function TechCard({ tech, isAdded, onAdd }) {
  const getBadgeStyle = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'popular':
        return 'bg-sky-50 text-sky-600 border-sky-100'
      case 'versatile':
      case 'standard':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100'
      case 'fast':
        return 'bg-amber-50 text-amber-600 border-amber-100'
      case 'top sql':
      case 'essential':
      case 'containers':
        return 'bg-blue-50 text-blue-600 border-blue-100'
      case 'cache':
        return 'bg-rose-50 text-rose-600 border-rose-100'
      case 'ubiquitous':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      case 'robust':
        return 'bg-cyan-50 text-cyan-600 border-cyan-100'
      case 'modern':
        return 'bg-teal-50 text-teal-600 border-teal-100'
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200'
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100/80 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
            <img
              src={tech.icon}
              alt={`${tech.name} icon`}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }}
            />
          </div>

          {tech.badge && (
            <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${getBadgeStyle(tech.badge)}`}>
              {tech.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-slate-900 tracking-tight mb-2">
          {tech.name}
        </h3>

        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 min-h-[40px]">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between gap-2 mb-5 text-xs text-slate-500">
          <span className="bg-slate-100/90 text-slate-600 font-medium px-2.5 py-1 rounded-md">
            {tech.category}
          </span>
          <span className="font-medium text-slate-500">
            {tech.difficulty}
          </span>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400 text-sm leading-none">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-[#0B0F17] hover:bg-slate-800 text-white shadow-sm hover:shadow active:scale-[0.99]'
          }`}
        >
          {isAdded ? (
            <>
              <span className="font-bold">✓</span> Added to Stack
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  )
}
