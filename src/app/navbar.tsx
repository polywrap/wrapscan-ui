import Link from "next/link";
import PolywrapLogo from "@/shared/polywrap-logo";

export default function Navbar() {
  return (
    <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-6">
      <Link href="/" className="flex items-center gap-4">
        <PolywrapLogo></PolywrapLogo>
        <span>polywrap</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="https://docs.polywrap.io" target="_blank">
          Docs
        </Link>
        <Link href="https://discord.polywrap.io" target="_blank">
          Support
        </Link>
        <Link href="/wrap/test-wrap/readme">Sample wrap</Link>
      </div>
    </div>
  );
}
