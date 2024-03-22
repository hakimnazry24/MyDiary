import React from "react";
import SideBarFilter from "./SideBarFilter";
import SideBarCategory from "./SideBarCategory";
import { prisma } from "@/prisma/db";

export default async function SideBar() {
  const dates = await prisma.entry.findMany({
    select: {
      id: true,
      date: true,
    },
  });

  return (
    <div className="px-6">
      <SideBarFilter></SideBarFilter>
      {dates.map((date) => (
        <div key={date.id}>
          <SideBarCategory date={date.date}></SideBarCategory>
        </div>
      ))}
    </div>
  );
}
