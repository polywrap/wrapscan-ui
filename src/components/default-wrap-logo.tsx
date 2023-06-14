import defaultWrapLogo from "@/assets/default-wrap-logo.svg";
import Image from "next/image";

export default function DefaultWrapLogo({ className }: { className?: string }) {
  return (
    <Image
      src={defaultWrapLogo}
      alt="Default Wrap logo"
      className={className}
    ></Image>
  );
}
