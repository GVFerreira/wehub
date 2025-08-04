'use client'

import { Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import Image from "next/image"

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-t-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <Image src="/assets/logotipo-white.png" alt="Grupo We Hub" width={150} height={30} />
            <p className="text-gray-400 text-sm leading-relaxed mb-3 max-w-md">
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
              <a
                href="mailto:contato@grupowehub.com"
                target="_blank"
                className="size-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <span className="text-black font-bold"><Mail /></span>
              </a>
              <a
                href="tel:+5521966756416"
                target="_blank"
                className="size-10 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <span className="text-black font-bold"><Phone /></span>
              </a>
            </div>
          </div>

          <div className="md:ml-10">
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
            <h3 className="text-xl font-bold mb-6">Brazil</h3>
            <p className="flex flex-col text-gray-400 text-sm gap-1">
              <span>Av. João Cabral de Mello Neto, 850</span>
              <span>Barra da Tijuca</span>
              <span>Rio de Janeiro/RJ - 22775-033</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Brazil</h3>
            <p className="flex flex-col text-gray-400 text-sm gap-1">
              <span>R. Dom Silvério, 126</span>
              <span>Loja 7, Centro</span>
              <span>Contagem/MG - 32041-450</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">USA</h3>
            <p className="flex flex-col text-gray-400 text-sm gap-1">
              <span>11903 Vermillion Avenue</span>
              <span>Windermere</span>
              <span>Orlando/FL - 34786</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 flex items-center gap-2 ">© {new Date().getFullYear()} We Hub. {t("rights")} Developed by <Image src="/gvf.svg" alt="GVF" width={60} height={20} className="h-4 w-auto" /></p>
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