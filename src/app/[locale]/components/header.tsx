'use client'

import Logotype from "./logotipo"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeSwitcher from "./theme-switcher"
import LanguageSwitcher from "./language-switcher"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Link as I18Link } from "@/i18n/navigation"

export default function Header() {
  const t = useTranslations("Header")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-20 bg-gray-200 dark:bg-black backdrop-blur-md border-b border-gray-400 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full h-16">
          <div className="flex items-center w-full md:w-fit">
            <Link href="/">
              <Logotype />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <I18Link href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors">
              {t("nav.about")}
            </I18Link>
            <Link
              href="/#parceiros"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
            >
              {t("nav.partners")}
            </Link>
            <Link
              href="/#objetivos"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
            >
              {t("nav.goals")}
            </Link>
            <I18Link
              href="/contato"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              {t("nav.contact")}
            </I18Link>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeSwitcher className="block md:hidden" />
            <LanguageSwitcher className="flex md:hidden" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <LanguageSwitcher className="hidden md:flex" />

            <ThemeSwitcher className="hidden md:block" />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <I18Link 
                href="/sobre"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </I18Link>
              <Link
                href="/#parceiros"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.partners")}
              </Link>
              <Link
                href="/#objetivos"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.goals")}
              </Link>
              <I18Link
                href="/contato"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </I18Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}