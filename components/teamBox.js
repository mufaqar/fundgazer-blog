import Link from "next/link";

export default function TeamBox(props) {
    return (
        <>
            
            <div className="md:h-[471px] h-[202px] border-2 border-[#2B195A] rounded-2xl bg-white relative
                            before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-b before:from-[#6F49DD] before:to-[#E7E2F3]
                            before:top-3 before:left-3 before:rounded-2xl flex items-end justify-center pb-8 px-4">
                <div className="text-center">
                    <p className="text-[#2B195A] md:text-[32px] capitalize text-base font-normal mb-5 leading-8">{props.name}</p>
                    <p className="text-xs font-bold uppercase text-skin-primary md:text-xl">{props.position}</p>
                </div>
            </div>
        </>
    )
}
