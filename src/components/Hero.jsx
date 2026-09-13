import React from 'react'

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-orange-200/40 via-rose-200/40 to-purple-200/40 rounded-full blur-3xl -z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base bg-brand-gradient shadow-lg shadow-pink-500/25 hover:opacity-95 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-md lg:max-w-none w-full">
              <img
                src="/assets/banner-stack.png"
                alt="Development Stack Architecture Visualization"
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
