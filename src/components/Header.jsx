"use client";
import { Car } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
        <Car className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Auto Import Srbija</h1>
        </div>
        <nav className="hidden lg:flex space-x-8">
          <Link
            href="/"
            className="hover:text-blue-200 font-medium text-white"
          >
            Početna
          </Link>
          <Link
            href="/o-nama"
            className="hover:text-blue-200 font-medium text-white"
          >
            O nama
          </Link>
          <Link
            href="/usluge"
            className="hover:text-blue-200 font-medium text-white"
          >
            Usluge
          </Link>
          <Link
            href="/galerija"
            className="hover:text-blue-200 font-medium text-white"
          >
            Galerija
          </Link>
          <Link
            href="/faq"
            className="hover:text-blue-200 font-medium text-white"
          >
            FAQ
          </Link>
          <Link
            href="/kontakt"
            className="hover:text-blue-200 font-medium text-white"
          >
            Kontakt
          </Link>
        </nav>
        <div className="lg:hidden flex items-center justify-center">
          <button
            className="text-white focus:outline-none cursor-pointer"
            onClick={() => setActive(!active)}
          >
            {
              active ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg> : <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            }

          </button>
        </div>
        <div className={`bg-blue-600 w-[200px] p-7 rounded-xl absolute top-[65px] z-50 duration-300 ${active ? "right-2 opacity-100" : "right-[-50%] opacity-0"} `} onClick={() => setActive(false)}>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-blue-200 font-medium text-white"
            >
              Početna
            </Link>
            <Link
              href="/o-nama"
              className="hover:text-blue-200 font-medium text-white"
            >
              O nama
            </Link>
            <Link
              href="/usluge"
              className="hover:text-blue-200 font-medium text-white"
            >
              Usluge
            </Link>
            <Link
              href="/galerija"
              className="hover:text-blue-200 font-medium text-white"
            >
              Galerija
            </Link>
            <Link
              href="/faq"
              className="hover:text-blue-200 font-medium text-white"
            >
              FAQ
            </Link>
            <Link
              href="/kontakt"
              className="hover:text-blue-200 font-medium text-white"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}