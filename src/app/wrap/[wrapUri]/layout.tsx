import { LinkProps } from "next/link";
import { PropsWithChildren, ReactNode } from "react";
import ActiveLink from "./active-link";

type WrapNavLinkProps = PropsWithChildren<LinkProps>;

function WrapNavLink(props: WrapNavLinkProps) {
  return (
    <ActiveLink
      {...props}
      className={`py-4 font-bold text-polywrap-gray-200 hover:text-polywrap-gray-50`}
      activeClassName="border-b border-b-polywrap-iris-500 text-polywrap-gray-50"
    ></ActiveLink>
  );
}

export default function WrapLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { wrapUri: string };
}) {
  const { wrapUri } = params;

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-16 px-4 pt-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-polywrap-gray-50">uniswap-v3</h1>
        <p className="text-polywrap-gray-200">
          Provides abstractions to assist you with interacting with the Uniswap
          V3 smart contracts in a programming language environment.
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex gap-8 border-b border-polywrap-iris-800">
          <WrapNavLink href="readme">Readme</WrapNavLink>
          <WrapNavLink href="schema">Schema</WrapNavLink>
        </div>
        {children}
      </div>
    </div>
  );
}
