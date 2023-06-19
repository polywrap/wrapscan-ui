import { LinkProps } from "next/link";
import { PropsWithChildren, ReactNode } from "react";
import ActiveLink from "../../../components/active-link";
import { wraps } from "@/app/wraps";
import { decodeWrapUri } from "@/utils/wrapUri";
import { getWrapManifest } from "@/utils/getWrapManifest";
import { getDocsManifest } from "@/utils/getDocsManifest";
import MobileReadMore from "./mobile-read-more";
import WrapInformationWidget from "@/components/wrap/wrap-information-widget";

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

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return wraps.map((wrap) => ({
    wrapUri: wrap.uri,
  }));
}

export default async function WrapLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { wrapUri: string };
}) {
  const { wrapUri } = params;
  const wrapUriDecoded = decodeWrapUri(wrapUri);
  const wrapManifest = await getWrapManifest(wrapUriDecoded);
  const docsManifest = await getDocsManifest(wrapUriDecoded);

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-4 pt-8 md:gap-16">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-polywrap-gray-50">
          {wrapManifest.name}
        </h1>

        {docsManifest && docsManifest.description && (
          <p className="text-polywrap-gray-200">{docsManifest.description}</p>
        )}
      </div>

      <div className="md:hidden">
        <MobileReadMore>
          <WrapInformationWidget
            url={wrapUriDecoded}
            version={wrapManifest.version}
            websiteUrl={docsManifest?.website}
            repositoryUrl={docsManifest?.repository}
          ></WrapInformationWidget>
        </MobileReadMore>
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
