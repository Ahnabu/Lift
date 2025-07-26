"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { contactFormSchema, type ContactFormData } from "@/schemas/contact"
import { submitContactForm } from "@/services/contact"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [submitMessage, setSubmitMessage] = React.useState<{ type: 'success' | 'error', text: string } | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setSubmitMessage(null)

        try {
            const result = await submitContactForm(data)

            if (result.success) {
                setSubmitMessage({ type: 'success', text: result.message })
                reset()
            } else {
                setSubmitMessage({ type: 'error', text: result.message })
            }
        } catch {
            setSubmitMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-gray-600">
                            Have a question or need a quote? We&apos;re here to help!
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name*
                                    </label>
                                    <Input
                                        id="name"
                                        {...register("name")}
                                        placeholder="Enter your full name"
                                        className={errors.name ? "border-red-500" : ""}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your E-mail*
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        {...register("email")}
                                        placeholder="Enter your email address"
                                        className={errors.email ? "border-red-500" : ""}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Phone*
                                </label>
                                <Input
                                    id="phone"
                                    {...register("phone")}
                                    placeholder="Enter your phone number"
                                    className={errors.phone ? "border-red-500" : ""}
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    {...register("message")}
                                    placeholder="Tell us about your project or inquiry"
                                    rows={5}
                                    className={errors.message ? "border-red-500" : ""}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                )}
                            </div>

                            {submitMessage && (
                                <div className={`p-4 rounded-md ${submitMessage.type === 'success'
                                    ? 'bg-green-100 text-green-800 border border-green-200'
                                    : 'bg-red-100 text-red-800 border border-red-200'
                                    }`}>
                                    {submitMessage.text}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full"
                                size="lg"
                            >
                                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
