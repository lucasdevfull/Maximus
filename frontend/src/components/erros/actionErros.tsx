import React from "react"

interface Error {
    children: React.ReactNode
}
export function Errors({ children }: Error) {
    return (
        <div className="p-4 mb-4 text-sm rounded-lg">
            <span className="font-medium text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400">
                {children}
            </span>
        </div>
    )
}