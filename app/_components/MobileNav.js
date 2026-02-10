"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon, CalendarDaysIcon, UserIcon, HomeIcon, HomeModernIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

export default function MobileNav({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden z-50">
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-primary-100 hover:text-accent-400 transition-colors"
        aria-label="Toggle menu"
      >
        <Bars3Icon className="h-8 w-8" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-primary-950 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="p-2 text-primary-100 hover:text-accent-400 transition-colors"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 py-4 flex flex-col h-[calc(100%-80px)]">
          <ul className="flex flex-col gap-6 text-xl">
            {session?.user && (
              <>
                <li>
                  <Link
                    href="/account/reservations"
                    onClick={closeMenu}
                    className="flex items-center gap-4 py-2 hover:text-accent-400 transition-colors"
                  >
                    <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
                    <span>Reservations</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/account/profile"
                    onClick={closeMenu}
                    className="flex items-center gap-4 py-2 hover:text-accent-400 transition-colors"
                  >
                    <UserIcon className="h-5 w-5 text-primary-600" />
                    <span>Guest profile</span>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                href="/cabins"
                onClick={closeMenu}
                className="flex items-center gap-4 py-2 hover:text-accent-400 transition-colors"
              >
                <HomeModernIcon className="h-5 w-5 text-primary-600" />
                <span>Cabins</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="flex items-center gap-4 py-2 hover:text-accent-400 transition-colors"
              >
                <InformationCircleIcon className="h-5 w-5 text-primary-600" />
                <span>About</span>
              </Link>
            </li>
            <li>
              {session?.user?.image ? (
                <Link
                  href="/account"
                  onClick={closeMenu}
                  className="flex items-center gap-4 py-2 hover:text-accent-400 transition-colors"
                >
                  <img
                    className="h-8 rounded-full"
                    src={session.user.image}
                    alt={session.user.name}
                    referrerPolicy="no-referrer"
                  />
                  <span>{session.user.name}</span>
                </Link>
              ) : (
                <Link
                  href="/account"
                  onClick={closeMenu}
                  className="block py-2 hover:text-accent-400 transition-colors"
                >
                  Guest area
                </Link>
              )}
            </li>
            
          </ul>

          {/* Sign Out Button - only show when logged in */}
          {session?.user && (
            <form action={signOutAction} className="mt-auto">
              <button 
                onClick={closeMenu}
                className="py-3 px-2 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full text-lg"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
                <span>Sign out</span>
              </button>
            </form>
          )}
        </nav>
      </div>
    </div>
  );
}
