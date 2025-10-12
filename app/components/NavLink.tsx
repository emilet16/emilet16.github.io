import Link from "next/link";

export default function NavLink(
    { href, children, close }: 
    { href: string; children: React.ReactNode; close: () => void }) {

        const handleClick = (e: any, id: string) => {
            e.preventDefault();
            const section = document.querySelector(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        };

        return (
            <Link href={href} className="hover:underline active:underline"
                onNavigate={(e) => { 
                    handleClick(e, href);
                    close(); 
                }}>
                    {children}
                </Link>
        );
}