'use client'

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Logotype from "./logotipo"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="bg-gray-200 dark:bg-black text-white pt-16 pb-8 border-t border-t-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Logotype />
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              {t("tagline")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="size-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <span className="text-black font-bold"><Facebook /></span>
              </Link>
              <Link
                href="#"
                className="size-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <span className="text-black font-bold"><Linkedin /></span>
              </Link>
              <Link
                href="#"
                className="size-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <span className="text-black font-bold"><Instagram /></span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-black dark:text-white">{t("navCompany.title")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("navCompany.list.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {t("navCompany.list.career")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-black dark:text-white">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-400">contato@grupowehub.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-400">+55 21 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-400">{t("location")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} We Hub. {t("rights")}</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {t("navPolicies.privacy")}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {t("navPolicies.terms")}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {t("navPolicies.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}