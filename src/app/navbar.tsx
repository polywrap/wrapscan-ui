import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mx-auto flex max-w-screen-xl gap-4 px-4">
      <Link href="/">Home</Link>
      <Link href="/wrap/fhdasjklf/readme">Sample wrap</Link>
    </div>
  );
}
