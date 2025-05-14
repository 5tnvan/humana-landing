"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/moving-borders";

type Props = {
  text: string;
  href: string;
};

export function MovingBorderDemo({ text, href }: Props) {
  return (
    <Link href={href} className="cursor-pointer">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {text}
      </Button>
    </Link>
  );
}
