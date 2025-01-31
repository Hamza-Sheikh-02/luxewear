"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ThemeButton from "@/components/ThemeButton";
import HeaderTop from "./HeaderTop";

const Navbar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeaderTop />
      <nav className="w-full max-w-[1440px] mx-auto shadow-md bg-background text-foreground">
        <div className="flex items-center justify-between px-4 md:px-10 py-4 border-b">
          <div>
            {isLoading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <Link href="/">
                <h1 className="text-2xl md:text-3xl font-bold">LuxeWear</h1>
              </Link>
            )}
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
              {isLoading ? (
                Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <Skeleton key={index} className="h-5 w-16" />
                  ))
              ) : (
                <>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      On Sale
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Brands
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
            <Link href="/shopping-cart" className="relative">
              {isLoading ? (
                <Skeleton className="h-10 w-10 rounded-full" />
              ) : (
                <FiShoppingCart className="text-2xl cursor-pointer" />
              )}
            </Link>

            {isLoading ? (
              <Skeleton className="h-10 w-10 rounded-full" />
            ) : (
              <>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </>
            )}

            {isLoading ? (
              <Skeleton className="h-10 w-10 rounded-full" />
            ) : (
              <ThemeButton />
            )}

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="block md:hidden"
                  variant="ghost"
                  aria-label="Open Mobile Menu"
                >
                  {isLoading ? (
                    <Skeleton className="h-5 w-5" />
                  ) : (
                    <FiMenu className="w-6 h-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-background text-foreground"
              >
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-4 p-4 text-lg">
                  {isLoading
                    ? Array(4)
                        .fill(null)
                        .map((_, index) => (
                          <Skeleton key={index} className="h-5 w-full" />
                        ))
                    : [
                        <li key="1">
                          <Link
                            href="/"
                            className="hover:text-primary transition-colors"
                          >
                            Home
                          </Link>
                        </li>,
                        <li key="2">
                          <Link
                            href="/about"
                            className="hover:text-primary transition-colors"
                          >
                            About us
                          </Link>
                        </li>,
                        <li key="3">
                          <Link
                            href="/contact"
                            className="hover:text-primary transition-colors"
                          >
                            Contact us
                          </Link>
                        </li>,
                        <li key="4">
                          <Link
                            href="#"
                            className="hover:text-primary transition-colors"
                          >
                            Blog
                          </Link>
                        </li>,
                      ]}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
