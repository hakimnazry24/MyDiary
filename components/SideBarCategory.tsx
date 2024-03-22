import { Enriqueta } from "next/font/google";
import React from "react";
import { prisma } from "@/prisma/db";

export default async function SideBarCategory({ date }: { date: Date }) {
  const titles = await prisma.entry.findMany({
    select: {
      id: true,
      title: true,
    },
    where: {
      date: {
        equals: date,
      },
    },
  });

  console.log(titles);
  return (
    <div>
      <div className="font-semibold text-black py-2">{date.toUTCString()}</div>
      <ul className="px-4">
        {titles.map((title) => (
          <a href={`/entry/${title.id}`} key={title.id}>
              <li className="text-white p-2 px-4 rounded-2xl transition ease-in-out duration-300 hover:bg-blue-600">
                {title.title}
              </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
