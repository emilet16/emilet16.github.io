'use client';
import Link from "next/link";

export default function NavLink(
    { href, children, closeAction = () => {}, className = '' }: 
    { href: string; children: React.ReactNode; closeAction?: () => void; className?: string }) {

        const handleClick = (e: any, id: string) => {
            e.preventDefault();

            if (id === '#' || id === '') {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            const section = document.querySelector(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        };

        return (
            <Link href={href} className={`hover:underline active:underline ${className}`}
                onNavigate={(e) => { 
                    handleClick(e, href);
                    closeAction(); 
                }}>
                    {children}
                </Link>
        );
}