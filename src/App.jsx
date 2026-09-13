import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechCard from './components/TechCard'
import YourStack from './components/YourStack'
import LoadingSpinner from './components/LoadingSpinner'
import Footer from './components/Footer'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [myStack, setMyStack] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('/data/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load technologies dataset')
        }
        return res.json()
      })
      .then((data) => {
        setTechnologies(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching technologies:', err)
        toast.error('Failed to load technology data. Please refresh.', {
          position: 'top-right',
        })
        setIsLoading(false)
      })
  }, [])

  const isTechInStack = (id) => {
    return myStack.some((item) => item.id === id)
  }

  const handleAddToStack = (tech) => {
    if (isTechInStack(tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2500,
        theme: 'colored',
      })
      return
    }

    setMyStack((prev) => [...prev, tech])
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'top-right',
      autoClose: 2500,
    })
  }

  const handleRemoveItem = (id, name) => {
    setMyStack((prev) => prev.filter((item) => item.id !== id))
    toast.info(`Removed ${name} from your stack.`, {
      position: 'top-right',
      autoClose: 2500,
    })
  }

  const handleRemoveAll = () => {
    if (myStack.length === 0) return
    setMyStack([])
    toast.error('Removed all technologies from your stack.', {
      position: 'top-right',
      autoClose: 2500,
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-rose-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <Hero onExploreClick={(e) => {
          e.preventDefault()
          document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })
        }} />

        <section id="technologies" className="scroll-mt-24 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-10 text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Explore the <span className="text-brand-gradient">Technologies</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-8 xl:col-span-9">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {technologies.map((tech) => (
                      <TechCard
                        key={tech.id}
                        tech={tech}
                        isAdded={isTechInStack(tech.id)}
                        onAdd={handleAddToStack}
                      />
                    ))}
                  </div>
                </div>

                <aside className="lg:col-span-4 xl:col-span-3">
                  <YourStack
                    stack={myStack}
                    onRemove={handleRemoveItem}
                    onRemoveAll={handleRemoveAll}
                  />
                </aside>

              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}
