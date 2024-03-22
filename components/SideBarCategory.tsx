import { Enriqueta } from "next/font/google";
import React from "react";

export default function SideBarCategory() {
  const entries = [
    {
      id: 1,
      title: "18. The Hunger Games",
    },
    {
      id: 2,
      title: "19. Homework for Week 17",
    },
    {
      id: 3,
      title: "20. Study Work Math Competition",
    },
    {
      id: 4,
      title: "21. Funny Picture",
    },
  ];
  return (
    <div>
      <div className="font-semibold text-black py-2">March, 2014</div>
      <ul className="px-4">
        {entries.map((entry) => (
          <a href="/" className="" key={entry.id}>
            <li  className="text-white p-2 px-4 rounded-2xl transition ease-in-out duration-300 hover:bg-blue-600">{entry.title}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
