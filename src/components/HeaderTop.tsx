"use client";

import { Suspense, lazy, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { IoMdClose } from "react-icons/io";

const SignUpButton = lazy(() =>
  import("@clerk/nextjs").then((mod) => ({ default: mod.SignUpButton }))
);

const HeaderTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="bg-primary dark:bg-secondary text-secondary dark:text-primary flex items-center justify-center px-4 py-2 text-xs sm:text-sm relative">
        <div className="flex items-center gap-2 text-center max-w-screen-md">
          <span>
            Sign Up and get 30% off on your first order{" "}
            <u>
              <strong>
                <Suspense fallback={<Skeleton className="h-4 w-24" />}>
                  <SignUpButton />
                </Suspense>
              </strong>
            </u>
          </span>
        </div>

        <button
          aria-label="Close announcement"
          onClick={() => setIsVisible(false)}
          className="absolute right-4 sm:right-8 text-white hover:text-gray-300"
        >
          <IoMdClose className="text-base sm:text-lg" />
        </button>
      </div>
    )
  );
};

export default HeaderTop;
