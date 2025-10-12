import Link from "next/link";

export default function NavLink(
    { href, children, close, className }: 
    { href: string; children: React.ReactNode; close: () => void; className?: string }) {

        const handleClick = (e: any, id: string) => {
            e.preventDefault();
            const section = document.querySelector(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        };

        return (
            <Link href={href} className={`hover:underline active:underline ${className ? className : ''}`}
                onNavigate={(e) => { 
                    handleClick(e, href);
                    close(); 
                }}>
                    {children}
                </Link>
        );
}