"use client";
import React, { useState } from "react";
import { Github, Linkedin, Instagram, Menu, X } from "lucide-react";

export default function MegaMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='flex justify-between items-center h-[56px] lg:h-[80px] w-full'>
      <div>Sandesh .</div>
      <div className='flex items-center gap-8'>
        <ul className='hidden lg:flex items-center gap-8'>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact Me</li>
        </ul>
        <div className='flex gap-3'>
          <div className='flex justify-center items-center rounded-full w-8 h-8'>
            <Github />
          </div>
          <div className='flex justify-center items-center rounded-full w-8 h-8'>
            <Linkedin />
          </div>
          <div className='flex justify-center items-center rounded-full w-8 h-8'>
            <Instagram />
          </div>
        </div>
        <div className='flex lg:hidden'>
          {!isMenuOpen && <Menu />}
          {isMenuOpen && <X />}
        </div>
      </div>
    </nav>
  );
}
