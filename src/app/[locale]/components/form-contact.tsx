'use client'

import { Mail, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { } from "lucide-react"
import { toast } from "sonner"
import { sendContactForm } from "../action"

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Digite um nome válido'
  }),
  telephone: z.string(),
  email: z.string().email(),
  company: z.string(),
  message: z.string()
})

export default function ContactForm () {
  const t = useTranslations("ContactForm")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      company: '',
      message: ''
    }
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const sending = await sendContactForm(data)
      if(sending.status) {
        toast('Sucesso',{
          icon: '✅',
          description: 'O formulário foi enviado com sucesso. Em breve a nossa equipe retornará o seu contato.',
          duration: 7000
        })

        form.reset()
      } else {
        toast('Erro', {
          icon: '❌',
          description: 'Erro ao enviar o formulário. Revise suas informações e tente novamente mais tarde.',
          duration: 7000
        })
      }
    } catch(e) {
      console.log(e)
      toast('Erro', {
        icon: '❌',
        description: 'Erro ao enviar o formulário. Revise suas informações e tente novamente mais tarde.',
        duration: 7000
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("name")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("telephone")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="(21) 91234-5678"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("company")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("message")}</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none w-full min-h-40 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder={t("messagePlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-6 md:py-4 md:px-8 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2" disabled={form.formState.isSubmitting}>
          {
            form.formState.isSubmitting ?
              <>
                {t("buttonIsSubimitting")}
                <Loader2 className="size-4 animate-spin" />
              </>
              :
              <>
                {t("button")}
                <Mail className="size-4" />
              </>
          }
        </Button>
      </form>
    </Form>
  )
}