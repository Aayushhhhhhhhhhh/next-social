import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          AAYUSOCIAL
        </Link>
      </div>

      {/* centre*/}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex justify-start gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="home"
              height={16}
              width={16}
              className="w-4 h-4 "
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="Friends"
              height={16}
              width={16}
              className="w-4 h-4 "
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="Stories"
              height={16}
              width={16}
              className="w-4 h-4 "
            />
            <span>Stories</span>
          </Link>
        </div>

        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>

      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" height={20} width={20} alt="people" />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                height={20}
                width={20}
                alt="messages"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                height={20}
                width={20}
                alt="notifications"
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image
                src="/login.png"
                height={20}
                width={20}
                alt="notifications"
              />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
