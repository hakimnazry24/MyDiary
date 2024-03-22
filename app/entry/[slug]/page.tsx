import React from "react";
import { prisma } from "@/prisma/db";

export default async function entryPage({ params }: any) {
  const { slug } = params;

  const entry = await prisma.entry.findFirst({
    where: {
      id: {
        equals: parseInt(slug),
      },
    },
  });

  return (
    <div className="p-5 px-7 h-screen">
      <div className="text-2xl font-bold mb-7">{ entry?.title }</div>
      <div className="text-slate-700 text-justify leading-9">
        { entry?.content }
      </div>
    </div>
  );
}
