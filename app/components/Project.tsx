import Image from "next/image";
import SlideUp from "./SlideUp";

export default function Project(props: { title: string, subtitle: string, description: string, imageURL: string, githubURL?: string }) {
  return (
    <SlideUp>
      <div className="col-span-2 md:col-span-1 bg-gray-100 dark:bg-gray-800 shadow-md/30 rounded-xl p-4 flex flex-col justify-center">
        <Image src={props.imageURL} width={1080} height={1080} alt="Project Image" className="aspect-square object-cover"/>
        <br />
        <h3 className="text-xl font-bold mt-2 md:mt-0">{props.title}</h3>
        <h4 className="text-lg">{props.subtitle}</h4>
        <hr />
        <p className="text-md mt-2">{props.description}</p>
        {props.githubURL && (
          <a href={props.githubURL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mt-4 p-2 bg-gray-200 dark:bg-gray-700
          rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors hover:scale-105 active:scale-95 transition-transform ease-in-out duration-300">
            <Image src="/github.svg" alt="GitHub Logo" width={24} height={24} className="inline mr-2 dark:invert"/>
            <span>View on GitHub</span>
          </a>
        )}
      </div>
    </SlideUp>
  );
} 