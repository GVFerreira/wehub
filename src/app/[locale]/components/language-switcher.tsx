'use client'

import { Link, usePathname, } from "@/i18n/navigation"
import { Languages } from "lucide-react"
import { useState } from "react"

type ThemeSwitcherProps = {
  className?: string
}

export default function LanguageSwitcher({ className = "" }: ThemeSwitcherProps) {
  const [languageOpen, setLanguageOpen] = useState(false)
  const pathname = usePathname()
  
  return (
    <div className="relative">
      <button
        onClick={() => setLanguageOpen(!languageOpen)}
        className={`${className} p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300`}
      >
        <Languages className="size-5 block" />
      </button>

      {
        languageOpen && (
          <div className="absolute z-20 right-0 mt-2 w-32 bg-gray-200 dark:bg-background rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
            <Link
              href={pathname}
              locale="pt"
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-t-lg"
            >
              Português
            </Link>
            <hr className="bg-gray-900"/>
            <Link
              href={pathname}
              locale="en"
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-b-lg"
            >
              English
            </Link>
          </div>
        )
      }
    </div>
  )
}