'use client';
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BlueContactButton(
    { href, children, closeAction = () => {}, className = '' }: 
    { href: string; children: React.ReactNode; closeAction?: () => void; className?: string }) 
{
    const handleClick = (e: any, id: string) => {
        e.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Link href={href} className={`flex whitespace-nowrap bg-primary-800 text-neutral-100 hover:bg-primary-700 hover:bg-primary-700
            px-2 py-1 rounded-lg font-bold shadow-sm hover:shadow-lg active:shadow-none border border-transparent active:border-neutral-800 transition ${className}`}
            onNavigate={(e) => { 
                handleClick(e, href);
                closeAction(); 
            }}>
                <div className="flex items-center justify-center gap-2 text-xl">
                    {children}
                    <div className="flex items-center justify-center aspect-square rounded-full bg-neutral-100">
                        <ArrowUpRight size={40} className="inline m-1 text-accent-800 stroke-2" />
                    </div>
                </div>
            </Link>
    );
}