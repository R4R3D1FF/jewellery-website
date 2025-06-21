'use client';
import { useState } from "react";

export default function ButtonsCard(){
    const [selectedButton, setSelectedButton] = useState(0);

    return (
        <div className="flex space-x-4 p-4 w-full aspect-[6/1]">
            {/* <!-- Bronze (Selected) --> */}
            <button onClick={()=>setSelectedButton(1)} className={`cursor-pointer rounded-full aspect-square h-full bg-gradient-to-br from-[#5a3a1e] to-[#5a3a1e] via-[#d49a6a] ${(selectedButton == 1)?"ring-1 ring-offset-3 ":"hover:ring-1 hover:ring-offset-2"} ring-black`}/>

            {/* <!-- Gold --> */}
            <button onClick={()=>setSelectedButton(2)} className={`cursor-pointer rounded-full aspect-square h-full bg-gradient-to-br from-[#7f6000] to-[#7f6000] via-[#ffe066] ${(selectedButton == 2)?"ring-1 ring-offset-3 ":"hover:ring-1 hover:ring-offset-2"} ring-black`}></button>

            {/* <!-- Silver --> */}
            <button onClick={()=>setSelectedButton(3)} className={`cursor-pointer rounded-full aspect-square h-full bg-gradient-to-br from-[#606060] to-[#606060] via-[#f0f0f0] ${(selectedButton == 3)?"ring-1 ring-offset-3 ":"hover:ring-1 hover:ring-offset-2"} ring-black`}></button>
        </div>
    );
}