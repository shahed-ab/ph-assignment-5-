import React, { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-4 group">
            <img 
              src="/assets/logo-text.png" 
              alt="Dev Stack Logo" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-107" 
            />
          </a>

          <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-[#E11D48] font-semibold' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              type="button" 
              className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button 
              type="button" 
              className="text-sm font-medium text-white bg-brand-gradient hover:opacity-90 px-6 py-2 rounded-full shadow-sm shadow-pink-500/20 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between h-16">
          <div className="flex-1 flex justify-start">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <img 
                src="/assets/hamburger.png" 
                alt="Menu" 
                className="w-5 h-4 object-contain" 
              />
            </button>
          </div>

          <div className="flex-shrink-0 flex justify-center">
            <a href="#" className="flex items-center">
              <img 
                src="/assets/logo-text.png" 
                alt="Dev Stack" 
                className="h-7 w-auto object-contain" 
              />
            </a>
          </div>

          <div className="flex-1 flex items-center justify-end gap-2">
            <button 
              type="button" 
              className="text-xs font-medium text-slate-700 hover:text-slate-900 px-2 py-1.5"
            >
              Sign In
            </button>
            <button 
              type="button" 
              className="text-xs font-medium text-white bg-brand-gradient px-3.5 py-1.5 rounded-full shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-1 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name)
                setMobileMenuOpen(false)
              }}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                activeLink === link.name
                  ? 'bg-rose-50 text-[#E11D48] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
