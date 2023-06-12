import Link from "next/link";
import { ReactNode } from "react";

export default function WrapLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { wrapUri: string };
}) {
  const { wrapUri } = params;

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div>Wrap Uri: {wrapUri}</div>
      <div>
        <Link href="readme">Readme</Link>
        <Link href="schema">Schema</Link>
      </div>
      {children}
    </div>
  );
}
