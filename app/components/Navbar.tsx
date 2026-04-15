'use client'
import React, { useState } from "react";
import Image from 'next/image';
import { X, Menu } from "lucide-react";
import NavLink from "./NavLink";
import ContactButton from "./ContactButton";

export default function Navbar() {
    var [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="flex flex-col w-full bg-primary-800 text-neutral-100 transition-all duration-300 ease-in-out md:justify-between px-6 py-2 md:px-16 lg:px-24">
            <div className="flex max-w-7xl w-full mx-auto items-center justify-between gap-4">
                <NavLink href="#" className="flex-1 flex justify-start text-xl font-bold" closeAction={() => {setIsOpen(false)}}>
                    <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                </NavLink>
            
                <div className="hidden md:flex gap-10 font-bold items-center justify-center text-md">
                    <NavLink href="#about" closeAction={() => {setIsOpen(false)}}>About me</NavLink>

                    <NavLink href="#projects" closeAction={() => {setIsOpen(false)}}>Projects</NavLink>

                    <NavLink href="#workflow" closeAction={() => {setIsOpen(false)}}>Workflow</NavLink>
                </div>

                <div className="flex-1 flex justify-end items-center">
                    <ContactButton className="hidden md:flex" href="#contact" closeAction={() => {setIsOpen(false)}}>
                        Get in touch
                    </ContactButton>

                    <div className="md:hidden">
                        <button onClick={()=>setIsOpen(!isOpen)} className="text-2xl font-bold">
                            {isOpen ? <X size={32}/> : <Menu size={32}/>}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}>
                <div className="overflow-hidden">
                    <ul className="space-y-4 mt-4 mb-8 flex flex-col font-bold text-md items-center">
                        <li>
                            <NavLink href="#about" closeAction={() => {setIsOpen(false)}}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink href="#projects" closeAction={() => {setIsOpen(false)}}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink href="#workflow" closeAction={() => {setIsOpen(false)}}>Workflow</NavLink>
                        </li>
                        <li>
                            <ContactButton href="#contact" closeAction={() => {setIsOpen(false)}}>
                                Get in touch
                            </ContactButton>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}