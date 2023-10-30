import React, { useEffect, useState } from 'react'

function Progressbar() {
    const [value, setValue] = useState(10);

    useEffect(() => {
        const range = document.querySelector("input[type=range]");
        const tooltip = document.getElementById("tooltip");

        let thumbSize = 8;
        const ratio = (range.value - range.min) / (range.max - range.min)
        let amountToMove = ratio * ((range.offsetWidth - thumbSize) - thumbSize) + thumbSize
        tooltip.style.left = amountToMove + "px"
    }, [value]);

    return (
        <div>
            <div className={`range-wrap relative flex h-[11px] w-full items-center `}>
                <input
                    className="range relative flex w-full"
                    aria-valuemin={0}
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    id="slider"
                    onChange={({ target: { value: radius } }) => {
                        setValue(radius);
                    }}
                />
                <div
                    id="tooltip"
                    className={`bubble absolute top-[-40px] flex h-[38px] w-[32px] -translate-x-1/2 items-center justify-center rounded-full bg-purple-400 align-middle text-body-medium text-white `}
                >
                    {value}
                </div>
            </div>
            <div className='flex flex-row justify-between mt-10'>
                <p className='md:text-xl text-[10px] font-semibold text-[#2AC702] '>
                    Very Low
                </p>
                <p className='md:text-xl text-[10px] font-semibold text-[#E9B020] '>
                    Low
                </p>
                <p className='md:text-xl text-[10px] font-semibold text-[#E86A34] '>
                    High
                </p>
                <p className='md:text-xl text-[10px] font-semibold text-[#E71D1D] '>
                    Extreme
                </p>
            </div>
        </div>
    )
}

export default Progressbar

// const ProgressBar = ({ progressPercentage }) => {
//     return (
//         <div className='h-[11px] w-full bg-transparent border-y border-[#D1D1D6] rounded-[50px]'>
//             <div
//                 style={{ width: `${progressPercentage}%`}}
//                 className={`h-full rounded-[50px] }${
//                     progressPercentage <= 25 && 'bg-[#2AC702]' || progressPercentage <= 50 && 'bg-[#E9B020]' || progressPercentage <= 75 && 'bg-[#E86A34]' || progressPercentage <= 100 && 'bg-[#E71D1D]'`}>
//             </div>
//         </div>
//     );
// };