"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
      onClick={()=>router.push("/")}
        alt="Logo"
        className="hidden md:block cursor-pointer h-auto w-auto"
        height="100"
        width="100"
        src="/images/logo.png"
        priority
      />
    </div>
  );
};

export default Logo;
