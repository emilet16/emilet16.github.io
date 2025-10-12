'use client'
import React, { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import NavLink from "./NavLink";

export default function Navbar() {
    var [isOpen, setIsOpen] = useState(false);

    return(
        <nav className={`w-full backdrop-blur-lg bg-white/50 dark:bg-neutral-900/50 transition-all duration-300 ease-in-out
         ${isOpen ? 'h-screen md:h-20' : 'h-15'}`}>
            <div className="max-w-3xl mx-auto flex flex-col p-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold hover:underline">Émile Turcotte</Link>
                
                    <div className="hidden md:flex gap-6 ml-8 items-center text-lg">
                        <NavLink href="#about" close={() => {setIsOpen(false)}}>About</NavLink>

                        <NavLink href="#projects" close={() => {setIsOpen(false)}}>Projects</NavLink>

                        <NavLink href="#contact" close={() => {setIsOpen(false)}}>Contact</NavLink>
                    </div>

                    <div className="md:hidden ml-8">
                        <button onClick={()=>setIsOpen(!isOpen)} className="text-2xl font-bold">
                            {isOpen ? <X size={32}/> : <Menu size={32}/>}
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} md:hidden transition-opacity duration-300 ease-in-out`}>
                    <ul className="space-y-4 mt-4 flex flex-col text-lg">
                        <li>
                            <NavLink href="#about" close={() => {setIsOpen(false)}}>About</NavLink>
                        </li>
                        <li>
                            <NavLink href="#projects" close={() => {setIsOpen(false)}}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink href="#contact" close={() => {setIsOpen(false)}}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}