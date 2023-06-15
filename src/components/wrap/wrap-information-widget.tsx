import { PropsWithChildren } from "react";

function InfoLabel(props: PropsWithChildren) {
  return (
    <label className="font-bold text-polywrap-gray-200">{props.children}</label>
  );
}

function InfoText(props: PropsWithChildren) {
  return <p className="text-polywrap-gray-50">{props.children}</p>;
}

export default function WrapInformationWidget() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <InfoLabel>Query URL</InfoLabel>
        <InfoText>/wrap/FDD65mUueJCg</InfoText>
      </div>
      <div>
        <InfoLabel>Repository</InfoLabel>
        <InfoText>github.com/polywrap/uniswap</InfoText>
      </div>
      <div>
        <InfoLabel>Version</InfoLabel>
        <InfoText>1.2.14</InfoText>
      </div>
      <div>
        <InfoLabel>Size</InfoLabel>
        <InfoText>450 kB</InfoText>
      </div>
    </div>
  );
}
