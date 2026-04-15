'use client';
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm({className = ''}: {className?: string}) {
    const [state, handleSubmit] = useForm("myklzjyr");

    if (state.succeeded) {
        return (
            <p className="text-xl mt-6">✅ Thanks for your message! I will get back to you soon!</p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col w-full gap-4 ${className}`}>
            <input id="name" type="text" name="name" placeholder="Name" required className="border border-neutral-800/75 p-2 rounded-lg"/>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input id="email" type="email" name="email" placeholder="Email" required className="border border-neutral-800/75 p-2 rounded-lg"/>
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea id="message" name="message" placeholder="Message" required className="border border-neutral-800/75 p-2 rounded-lg"/>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting} className="bg-primary-800 text-neutral-100
                        hover:bg-primary-700 active:border-neutral-800 px-2 py-1 rounded-lg font-bold 
                        shadow-sm hover:shadow-lg active:shadow-none border border-transparent text-xl transition">
                Submit
            </button>
            <ValidationError errors={state.errors} />
        </form>
    );
}