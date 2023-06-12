import Link from "next/link";

export default function Navbar() {
  return <div className="max-w-screen-xl px-4 mx-auto flex gap-4">
    <Link href="/">Home</Link>
    <Link href="/wrap/fhdasjklf/readme">Sample wrap</Link>
  </div>;
}
