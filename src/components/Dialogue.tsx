import React from 'react'
import { User, Bot } from 'lucide-react'

interface MessageProps {
  children: React.ReactNode
}

export function Human({ children }: MessageProps) {
  return (
    <div className="flex justify-end mb-4">
      <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 p-3 rounded-lg max-w-[75%] flex items-start space-x-2">
        <div className="flex-grow">
          <p className="text-sm">{children}</p>
        </div>
        <User className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
      </div>
    </div>
  )
}

export function AI({ children }: MessageProps) {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 p-3 rounded-lg w-full flex items-start space-x-2">
        <Bot className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
        <div className="flex-grow">
          <p className="text-sm">{children}</p>
        </div>
      </div>
    </div>
  )
}

export function Dialogue({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 space-y-4">
      {children}
    </div>
  )
}
