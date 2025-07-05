'use client';

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const { user, isSignedIn, isLoaded } = useUser();
  let path = "";

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const userEmail = user?.emailAddresses?.[0]?.emailAddress;
     

      switch (true) {
        case userEmail === "zurard07@gmail.com":
          path = "/dashboard/manufacturer";
          break;
        case userEmail === "shreetejmeshram07@gmail.com":
          path = "/dashboard/retail";
          break;
        case userEmail === "abhijithviju2005cs@gmail.com":
          path = "/dashboard/wholesaler";
          break;
        case userEmail === "aishnabhatia05@gmail.com":
          path = "/dashboard/raw";
          break;
        default:
          path = "/dashboard/customer"; // Default path if no match found
      }
      console.log("Redirecting to path: ", path);
      router.push(path);
    }

  }, [isLoaded, isSignedIn, user, router]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-20">
        Welcome to the Retail Blockchain Platform
      </h1>
      <p className="text-center mt-4">
        Please sign in to access your dashboard.
      </p>
    </div>
  );
}
