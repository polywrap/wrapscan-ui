import Link from "next/link";
import { WrapHomepageItem, wraps } from "./wraps";
import { encodeWrapUri } from "@/utils/wrapUri";

type WrapListItemProps = {
  wrap: WrapHomepageItem;
};

function WrapListItem(props: WrapListItemProps) {
  const { wrap } = props;
  return (
    <Link
      href={`/wrap/${encodeWrapUri(wrap.uri)}/readme`}
      className="flex flex-col gap-6 rounded-2xl border border-polywrap-iris-600 bg-polywrap-card p-8 hover:border-polywrap-iris-500 hover:bg-polywrap-card-hover"
    >
      <h3 className="text-xl font-bold text-polywrap-gray-50">{wrap.name}</h3>
      <p className="text-polywrap-gray-200">{wrap.description}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8">
      <div className="flex flex-col gap-6">
        {wraps.map((wrap, idx) => {
          return <WrapListItem wrap={wrap} key={idx}></WrapListItem>;
        })}
      </div>
    </main>
  );
}
