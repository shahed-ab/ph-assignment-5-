import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 space-y-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-pink-500 animate-spin"></div>
      </div>
      <p className="text-slate-500 font-medium text-sm animate-pulse">
        Loading tech catalog........
      </p>
    </div>
  )
}
