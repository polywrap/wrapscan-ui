"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useState, useEffect } from "react";

export type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const segment = useSelectedLayoutSegment();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Check if the router fields are updated client-side

    const newClassName =
      segment === props.href
        ? `${className} ${activeClassName}`.trim()
        : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
  }, [
    segment,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
