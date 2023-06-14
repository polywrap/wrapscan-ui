import Link from "next/link";
import PolywrapLogo from "@/components/polywrap-logo";

export default function Navbar() {
  return (
    <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-6">
      <Link href="/" className="flex items-center gap-4">
        <PolywrapLogo></PolywrapLogo>
        <div className="flex flex-col">
          <span className="font-display font-bold">wrapscan</span>
          <span className="text-xxs text-polywrap-gray-200">by polywrap</span>
        </div>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="https://docs.polywrap.io"
          target="_blank"
          className="hover:underline"
        >
          Docs
        </Link>
        <Link
          href="https://discord.polywrap.io"
          target="_blank"
          className="hover:underline"
        >
          Support
        </Link>
      </div>
    </div>
  );
}
