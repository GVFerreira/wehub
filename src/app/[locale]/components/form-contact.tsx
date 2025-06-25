import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ContactForm() {
  const t = useTranslations("ContactForm")
  
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">{t("name")}</label>
        <input
          type="text"
          className="w-full px-4 py-3 border-[0.25px] border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-3 border-[0.25px] border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t("telephone")}</label>
        <input
          type="tel"
          className="w-full px-4 py-3 border-[0.25px] border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          placeholder="(11) 99999-9999"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t("company")}</label>
        <input
          type="text"
          className="w-full px-4 py-3 border-[0.25px] border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t("message")}</label>
        <textarea
          rows={5}
          className="w-full px-4 py-3 border-[0.25px] border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          placeholder={t("messagePlaceholder")}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-6 md:py-4 md:px-8 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
      >
        <Mail className="size-5" />
        {t("button")}
      </button>
    </form>
  )
}