import Image from "next/image";
import Project from "./components/Project";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full max-w-3xl space-y-8">
      <div id="about" className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">💬 About me</h2>
        
        <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 shadow-md/30 rounded-xl items-center gap-8 p-4 md:p-8">
          <Image src="/emile.jpg" 
            width={200} 
            height={200}
            alt="Picture of myself"
            className="aspect-square rounded-full object-cover"
          />

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Hi, I'm Émile 👋</h3>
            <h4 className="text-lg">Student and Innovator</h4>

            <hr />
            <br />

            <ul className="text-lg space-y-2 mt-2 md:mt-0">
              <li className="flex items-start gap-2">
                <span>📈</span>
                <span>Aspiring startup founder in search of opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎓</span>
                <span>Student at Dawson College, Montreal</span>
              </li>
              <li className="flex items-start gap-2">
                <span>⚙️</span>
                <span>Passionate about technology, AI, and solving problems</span>
              </li>
              <li className="flex items-start gap-2">
                <span>💡</span>
                <span>Always eager to learn and take on new challenges</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="projects" className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">📌 Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Project title="Quartier" subtitle="Bluetooth Business Card" 
          description="Quartier is a cross-platform mobile app that lets users instantly share business cards at networking events via Bluetooth."
          imageURL="/QuartierDemo.gif"
          githubURL="https://github.com/emilet16/Bluetooth-Business-Card"/>
        </div>
      </div>
      
      <div id="contact" className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">📫 Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mai&#108;to&#58;emile&#46;&#116;u%&#55;&#50;&#99;&#37;6&#70;t&#37;&#55;4e160&#37;&#51;8&#64;&#103;&#109;ail&#46;com"
          className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600
          transition-all active:scale-95 shadow-md/20 hover:shadow-lg/20 active:shadow-sm/20">
            <Mail className="inline mr-2"/>
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/emile-turcotte/" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600
          transition-all active:scale-95 shadow-md/20 hover:shadow-lg/20 active:shadow-sm/20">
            <Image src="/linkedin.png" alt="LinkedIn Logo" width={24} height={24} className="inline mr-2 dark:invert"/>
            <span>LinkedIn</span>
          </a>
          <a href="https://www.github.com/emilet16" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600
          transition-all active:scale-95 shadow-md/20 hover:shadow-lg/20 active:shadow-sm/20">
            <Image src="/github.svg" alt="Github Logo" width={24} height={24} className="inline mr-2 dark:invert"/>
            <span>Github</span>
          </a>
        </div>
      </div> 
    </div>
  );
}
