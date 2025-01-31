"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-background text-foreground py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            FIND CLOTHES THAT MATCH{" "}
            <span className="text-primary">YOUR STYLE</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
            <Button className="mt-4 px-8 py-5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80 transition duration-200">
              Shop Now
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {isLoading ? (
            <Skeleton className="w-full max-w-xs sm:max-w-md md:max-w-lg h-[300px] rounded-xl" />
          ) : (
            <Image
              src="https://i.pinimg.com/736x/8b/28/b9/8b28b92efc46a084edde8d9644c2fbdd.jpg"
              alt="hero image"
              width={600}
              height={300}
              className="rounded-xl shadow-lg object-cover w-full max-w-xs sm:max-w-md md:max-w-lg"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
