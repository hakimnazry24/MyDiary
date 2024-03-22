
export default function Diary() {
        return (
            <div> 
                    <form action="" className="my-5">
                            <textarea name="entry" id="entry" cols={90} rows={18} className="p-5 rounded-xl shadow-gray-800 shadow-lg"></textarea>
                            <div className=""><button className="p-2 rounded-xl bg-green-600 hover:bg-green-600/80 text-white border-2 border-white my-2 ">Submit</button></div>
                    </form>
            </div>
        )
    }
  