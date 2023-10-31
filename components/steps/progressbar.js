import React, { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import cn from "classnames";

function Progressbar(props) {
    const isVertical = props.orientation === "vertical";
    return (
        <div className='grid'>
            <div className=''>
                <ReactSlider
                    renderThumb={(props, state) => (
                        <div
                            {...props}
                            className={cn({
                                "h-[72px]": !isVertical,
                                "w-full": isVertical,
                                "aspect-square relative rounded-full bg-[#E9B020] border-[15px] shadow border-white py-2 text-xs text-white flex items-center justify-center cursor-grab top-[-30px]":
                                    true,
                            })}
                        >
                            {state.valueNow}
                        </div>
                    )}
                    renderTrack={(props, state) => {
                        const points = Array.isArray(state.value) ? state.value.length : null;
                        const isMulti = points && points > 0;
                        const isLast = isMulti ? state.index === points : state.index != 0;
                        const isFirst = state.index === 0;
                        return (
                            <div
                                {...props}
                                className={cn({
                                    "h-[11px] border-y border-[#D1D1D6] top-0": !isVertical,
                                    "w-full left-1/2 -translate-x-1/2": isVertical,
                                    "rounded-full": true,
                                    "bg-transparent": isMulti ? isFirst || isLast : isLast,
                                    "bg-[#E9B020]": isMulti ? !isFirst || !isLast : isFirst,
                                })}
                            ></div>
                        );
                    }}
                />
            </div>
            <div className='flex flex-row justify-between mt-16'>
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