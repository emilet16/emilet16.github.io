import SlideUp from "./SlideUp";

export default function ContactButton(props: { children: React.ReactNode, link: string }) {
    return (
        <SlideUp>
            <a href={props.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600
                transition-all hover:scale-105 active:scale-95 shadow-md/20 hover:shadow-lg/20 active:shadow-sm/20 ease-in-out duration-300">
                {props.children}
            </a>
        </SlideUp>
    );
}