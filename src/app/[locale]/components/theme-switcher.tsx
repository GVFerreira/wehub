'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Loader2 } from "lucide-react"

type ThemeSwitcherProps = {
  className?: string
}

export default function ThemeSwitcher({ className = "" }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <Loader2 className="size-4 animate-spin" /> 

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`${className} p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300`}
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
