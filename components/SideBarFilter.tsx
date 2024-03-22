import { SlMagnifier } from "react-icons/sl";
import { prisma } from "@/prisma/db";

export default async function SideBarFilter() {
  const dates = await prisma.entry.findMany({
    select: {
      id: true,
      date: true,
    },
  });

  return (
    // form action not done yet
    <div className=" flex flex-row flex-wrap mt-5">
      <select name="dates" id="dates" className="p-3 mr-2 rounded-xl">
        {dates.map((date) => (
          <option value="date" key={date.id}>
            {date.date.toUTCString()}
          </option>
        ))}
      </select>
      <button className="p-3 px-4 bg-white rounded-full active:bg-gray-200">
        <SlMagnifier></SlMagnifier>
      </button>
    </div>
  );
}
