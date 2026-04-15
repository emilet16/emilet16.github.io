import Image from "next/image";

export default function Project({ title, description, imageSrc, github_url }: { title: string; description: string; imageSrc: string; github_url: string }) {
    return (
        <div className="flex flex-col md:flex-row w-full items-stretch justify-between border border-neutral-300 rounded-lg overflow-hidden p-4 md:p-6 gap-4">
            <div className="flex flex-col w-full md:w-1/2 items-start justify-start">
                <div>
                    <h3 className="text-3xl font-bold text-neutral-700 font-display tracking-tight">{title}</h3>
                    <p className="text-lg lg:text-xl text-neutral-700 pt-4">{description}</p>
                </div>
                
                <a href={github_url} target="_blank" rel="noopener noreferrer" className="mt-6">
                    <div className="flex flex-row whitespace-nowrap bg-primary-800 text-neutral-100
                        hover:bg-primary-700 active:border-neutral-800 px-2 py-1 rounded-lg font-bold 
                        shadow-sm hover:shadow-lg active:shadow-none border border-transparent 
                        justify-between items-center gap-2 text-xl transition">
                        View on GitHub
                        <Image src="/github.svg" alt="" width={40} height={40} className="inline m-1"/>
                    </div>
                </a>
            </div>
            <div className="w-full md:w-1/2 max-w-[400px] flex items-center justify-center">
                <Image src={imageSrc} alt={`${title} screenshot`} 
                width={800} height={600} 
                className="rounded-lg object-cover border border-neutral-800/75" 
                sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
        </div>
    );
}