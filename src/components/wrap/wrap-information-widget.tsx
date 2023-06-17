import Link from "next/link";
import { PropsWithChildren } from "react";

function InfoLabel(props: PropsWithChildren) {
  return (
    <label className="break-all font-bold text-polywrap-gray-200">
      {props.children}
    </label>
  );
}

function InfoText(props: PropsWithChildren) {
  return <p className="break-all text-polywrap-gray-50">{props.children}</p>;
}

type WrapInformationWidgetProps = {
  url: string;
  repositoryUrl?: string;
  websiteUrl?: string;
  version: string;
};

export default function WrapInformationWidget(
  props: WrapInformationWidgetProps
) {
  const { url, repositoryUrl, websiteUrl: homepageUrl, version } = props;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <InfoLabel>Wrap URL</InfoLabel>
        <InfoText>{url}</InfoText>
      </div>
      {homepageUrl && (
        <div>
          <InfoLabel>Website</InfoLabel>
          <InfoText>
            <Link
              href={homepageUrl}
              target="_blank"
              className="hover:underline"
            >
              {homepageUrl}
            </Link>
          </InfoText>
        </div>
      )}
      {repositoryUrl && (
        <div>
          <InfoLabel>Repository</InfoLabel>
          <InfoText>
            <Link
              href={repositoryUrl}
              target="_blank"
              className="hover:underline"
            >
              {repositoryUrl}
            </Link>
          </InfoText>
        </div>
      )}
      <div>
        <InfoLabel>Version</InfoLabel>
        <InfoText>{version}</InfoText>
      </div>
    </div>
  );
}
