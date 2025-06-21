import Image from "next/image"
import ButtonsCard from "./buttons-card";

export default function ProductCard(props:any){
    return (
        <div className="rounded-3xl border-1 border-gray-300 flex flex-col w-full p-4">
            <div className="w-full aspect-square">
                <Image
                    src={props.image}          // public directory or remote URL
                    alt="Site logo"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-cover"
                />
            </div>
            
            
            <div className="h-[">
                {props.name}
            </div>

            <div>
                <div  className="text-xs p-1 text-white inline rounded-4xl bg-gray-700">
                    SAVE ₹ 5,622
                </div>
                <div className="py-2">
                    <span className="text-gray-700 line-through px-1">{props.price + 5622}</span> {props.price}
                </div>
                    
            </div>

            <ButtonsCard/>

        </div>
    );
}