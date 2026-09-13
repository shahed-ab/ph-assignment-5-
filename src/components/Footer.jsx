import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
         
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="./assets/logo-text.png"
                alt="Dev Stack"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern softwares.
            </p>
            <div className="flex items-center gap-4 pt-2 text-sm font-medium text-slate-700">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-rose-500 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-rose-500 transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-rose-500 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
                <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
                <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
