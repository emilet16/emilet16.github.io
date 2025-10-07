'use client'
import React, { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Navbar() {
    var [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="w-full bg-gray-100 dark:bg-gray-800">
            <div className="max-w-3xl mx-auto flex flex-col p-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold hover:underline">Émile Turcotte</Link>
                
                    <div className="hidden md:flex gap-6 ml-8 items-center text-lg">
                        <Link href="#about" className="hover:underline">About</Link>
                        <Link href="#projects" className="hover:underline">Projects</Link>
                        <Link href="#contact" className="hover:underline">Contact</Link>
                    </div>

                    <div className="md:hidden ml-8">
                        <button onClick={()=>setIsOpen(!isOpen)} className="text-2xl font-bold">
                            {isOpen ? <X size={32}/> : <Menu size={32}/>}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <ul className="space-y-4 mt-4 flex flex-col text-lg">
                            <li>
                                <Link href="/" className="active:underline">About</Link>
                            </li>
                            <li>
                                <Link href="#projects" className="active:underline">Projects</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="active:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}