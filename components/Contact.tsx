"use client";

import type { SubmitEvent, ChangeEvent } from "react";
import { useState } from "react";
import Mail from "./svg/mail";
import Pin from "./svg/mapPin";
import Phone from "./svg/phone";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const onFormSubmitted = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                cache: 'no-cache',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessage(t.contact.success);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                setMessage(data.message || t.contact.failed);
            }
        } catch (error) {
            setMessage(t.contact.error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 mx-auto w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
                        </div>
                        <div>
                            <p className="text-gray-400 text-lg mb-8 max-w-lg">
                                {t.contact.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 glass rounded-lg text-primary">
                                        <Mail />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{t.contact.email}</p>
                                        <a href="mailto:ramoneduardo.contato@gmail.com" className="font-medium hover:text-primary transition-colors">
                                            ramoneduardo.contato@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 glass rounded-lg text-primary">
                                        <Phone />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{t.contact.phone}</p>
                                        <p className="font-medium">+55 (31) 99475-8935</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 glass rounded-lg text-primary">
                                        <Pin />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{t.contact.location}</p>
                                        <p className="font-medium">Belo Horizonte, Minas Gerais, Brasil</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="glass p-8 rounded-2xl border border-white/10">
                            <form className="space-y-6" onSubmit={onFormSubmitted}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">{t.contact.name}</label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={formData.name}
                                            id="name"
                                            suppressHydrationWarning
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300">{t.contact.email}</label>
                                        <input
                                            type="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            id="email"
                                            suppressHydrationWarning
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">{t.contact.subject}</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        value={formData.subject}
                                        id="subject"
                                        suppressHydrationWarning
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 transition-colors"
                                        placeholder=""
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300">{t.contact.message}</label>
                                    <textarea
                                        id="message"
                                        onChange={handleChange}
                                        value={formData.message}
                                        rows={4}
                                        suppressHydrationWarning
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 transition-colors resize-none"
                                        placeholder=""
                                    />
                                </div>

                                {message && (
                                    <div className={`text-sm font-medium ${message.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
                                        {message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98]"
                                    disabled={isLoading}
                                >
                                    {isLoading ? t.contact.loading : t.contact.submit}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}