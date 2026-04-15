import Image from "next/image";
import ContactButton from "./components/ContactButton";
import BlueContactButton from "./components/BlueContactButton";
import Project from "./components/Project";
import { UserRound, Settings, TrendingUp } from "lucide-react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <div className="flex w-full bg-primary-800 items-center min-h-svh">
        <div className="relative flex flex-row w-full max-w-7xl mx-auto justify-between px-6 md:px-16 lg:px-24 overflow-hidden md:overflow-visible">
          <div className="flex flex-1 flex-col items-start justify-center relative z-10">
            <h1 className="text-6xl md:text-7xl font-semibold font-display text-neutral-100 tracking-tight leading-none md:leading-[1.1]">Building <br /> software that <br/> matters</h1>
            <p className="text-xl md:text-2xl font-bold text-neutral-100 font-display mt-10 md:mt-12 mb-6">Émile <br/> Turcotte</p>
            <ContactButton href="#contact">
              Get in touch
            </ContactButton>
          </div>

          <div className="flex absolute inset-0 z-0 w-full h-full md:relative md:flex-[1.5] md:min-h-[500px] pointer-events-none">
            <Image priority={true} src="/ellipses.svg" alt="" 
            width={800}
            height={600} 
            className="object-contain object-center md:object-right opacity-15 md:opacity-75" />
          </div>
        </div>
      </div>

      <div id="about" className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-stretch justify-between 
      px-6 md:px-16 lg:px-24 py-4 md:py-12 gap-8 scroll-mt-20">
        <div className="flex flex-col w-full md:w-1/2 items-start justify-start">
          <div>
            <h2 className="text-2xl font-medium text-secondary-700 tracking-tight font-display">About me</h2>
            <p className="text-4xl font-bold text-neutral-700 tracking-tight font-display">I turn real-world problems into user-friendly solutions</p>
            <p className="text-lg lg:text-xl text-neutral-700 pt-4">
              As a student, I thrive in environments where I can constantly learn, adapt, and push my boundaries, and I'm always open to new opportunities for professional growth. <br/>
              Aside from software development, I also have three cats, and I am an avid language learner!
            </p>
          </div>
          
          <BlueContactButton href="#contact" className="mt-6">
            Let's connect!
          </BlueContactButton>
        </div>

        <div className="w-full md:w-1/2 max-w-[400px] flex items-center justify-center">
          <Image src="/emile.jpg" alt="Picture of the author" 
          width={600} height={400}
          className="rounded-lg object-cover border border-neutral-800/75" 
          sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      <div id="projects" className="flex flex-col w-full max-w-7xl mx-auto items-start justify-between px-6 md:px-16 lg:px-24 py-4 md:py-12 gap-8 scroll-mt-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium text-secondary-700 tracking-tight font-display">My Projects</h2>
          <p className="text-4xl font-bold text-neutral-700 tracking-tight font-display">Some examples of my impact</p>
        </div>

        <Project 
        title="Quartier: The Bluetooth Business Card" 
        description="Quartier is an iOS/Android mobile app where users can
        create and share custom business cards with others in proxmity using Bluetooth.
        Made for networking events, Quartier is a seamless way to stay in touch with new contacts." 
        imageSrc="/QuartierDemo.gif" github_url="https://github.com/emilet16/Bluetooth-Business-Card"/>

        <Project
        title="Slide deck generator for prize winners"
        description="Using an Excel list of prize winners, the program generates a PowerPoint presentation to announce the recipients. Perfect for awards events with many kinds of media to project!"
        imageSrc="/Presentation.png"
        github_url="https://github.com/emilet16/Gala-Presentation"/>
      </div>

      <div id="workflow" className="flex flex-col w-full max-w-7xl mx-auto items-start justify-between px-6 md:px-16 lg:px-24 py-4 md:py-12 gap-8 scroll-mt-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium text-secondary-700 tracking-tight font-display">My Workflow</h2>
          <p className="text-4xl font-bold text-neutral-700 tracking-tight font-display">How I craft great solutions</p>
        </div>

        <div className="flex flex-col md:flex-row w-full items-center md:items-stretch justify-between gap-8 p-8">
          <div className="flex flex-col items-start w-full max-w-[175px]">
            <div className="w-full aspect-square bg-secondary-800 text-neutral-100 mb-4 p-6 rounded-2xl flex items-center justify-center">
              <UserRound strokeWidth={1.5} className="w-full h-full" />
            </div>
            <p className="text-xl font-semibold text-center leading-tight">User-centered design</p>
          </div>

          <div className="flex flex-col items-start w-full max-w-[175px]">
            <div className="w-full aspect-square bg-secondary-800 text-neutral-100 mb-4 p-6 rounded-2xl flex items-center justify-center">
              <Settings strokeWidth={1.5} className="w-full h-full" />
            </div>
            <p className="text-xl font-semibold text-center leading-tight">Reliable software</p>
          </div>

          <div className="flex flex-col items-start w-full max-w-[175px]">
            <div className="w-full aspect-square bg-secondary-800 text-neutral-100 mb-4 p-6 rounded-2xl flex items-center justify-center">
              <TrendingUp strokeWidth={1.5} className="w-full h-full" />
            </div>
            <p className="text-xl font-semibold text-center leading-tight">Iterative improvements</p>
          </div>
        </div>
      </div>

      <div id="contact" className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-start justify-between px-6 md:px-16 lg:px-24 py-6 md:py-12 gap-8 scroll-mt-20">
        <div className="flex flex-col w-full md:w-1/2 items-start justify-start">
          <div>
            <h2 className="text-2xl font-medium text-secondary-700 tracking-tight font-display">Contact me</h2>
            <p className="text-4xl font-bold text-neutral-700 tracking-tight font-display">Let's make something meaningful!</p>
          </div>

          <ContactForm  className="mt-6"/>
        </div>

        <div className="hidden md:flex md:relative md:flex-[1.5] md:min-h-[500px]">
          <Image src="/ellipses-blue.svg" alt="" 
          width={800}
          height={600} 
          className="object-contain object-center md:object-right opacity-75" />
        </div>
      </div>
    </div>
  );
}
