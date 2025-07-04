'use client'

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import Image from "next/image"

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-t-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Image src="/assets/logotipo-white.png" alt="Grupo We Hub" width={150} height={30} />
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              {t("tagline")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/grupo-we-hub/"
                target="_blank"
                className="size-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <span className="text-black font-bold"><Linkedin /></span>
              </a>
              <a
                href="https://www.instagram.com/grupowehub/"
                target="_blank"
                className="size-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <span className="text-black font-bold"><Instagram /></span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t("navCompany.title")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  {t("navCompany.list.about")}
                </Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/grupo-we-hub/jobs/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                {t("navCompany.list.career")}
                </a>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                {t("navCompany.list.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t("contact")}</h3>
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

        <div className="border-t border-gray-800 pt-8 text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} We Hub. {t("rights")}</p>
            <div className="flex space-x-6">
              <Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors">
                {t("navPolicies.privacy")}
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                {t("navPolicies.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}