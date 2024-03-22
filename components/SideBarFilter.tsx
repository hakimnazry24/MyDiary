import { SlMagnifier } from "react-icons/sl";

export default async function SideBarFilter() {
  return (
    // form action not done yet
    <div className=' flex flex-row flex-wrap mt-5'>
        <select name="dates" id="dates" className="p-3 mr-2 rounded-xl">
            <option value="date">10 Feb 2024</option>
            <option value="date">10 Feb 2024</option>
            <option value="date">10 Feb 2024</option>
            <option value="date">10 Feb 2024</option>
            <option value="date">10 Feb 2024</option>
            <option value="date">10 Feb 2024</option>
        </select>
        <button className="p-3 px-4 bg-white rounded-full active:bg-gray-200"><SlMagnifier></SlMagnifier></button>
    </div>
  )
}
