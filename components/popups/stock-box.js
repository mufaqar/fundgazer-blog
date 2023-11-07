import React from 'react'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { BiSolidCheckboxChecked, BiSolidChevronLeft } from 'react-icons/bi';
import Search_Form from './search-form';
import Image from 'next/image';

function StockBox({ data, model, setModel, selectedStocks, setSelectedStocks }) {
        const handleStockClick = (stockId) => {
        const selectedIndex = selectedStocks.indexOf(stockId);
        if (selectedIndex === -1) {
            // Stock is not selected, add it to the selectedStocks array
            setSelectedStocks([...selectedStocks, stockId]);
        } else {
            // Stock is already selected, remove it from the selectedStocks array
            setSelectedStocks([...selectedStocks.slice(0, selectedIndex), ...selectedStocks.slice(selectedIndex + 1)]);
        }
    };
    return (
        <div className={`md:bg-[#F7F7F9] max-w-[751px] mx-auto md:px-12 px-4 py-8`}>
            <div className='flex justify-between items-center'>
                <BiSolidChevronLeft
                    onClick={() => setModel(false)}
                    className={`'text-2xl font-extrabold mr-5 cursor-pointer`} />
                <h3 className='md:text-2xl font-extrabold font-interBold text-skin-primary w-full'>
                    Top 50 Stocks <span className='text-xs'>(By Volume)</span>
                </h3>
                <AiOutlineClose className='text-xl font-extrabold cursor-pointer'  onClick={() => setModel(false)} />
            </div>
            <div className="flex md:flex-row flex-col justify-between my-10">
                <Search_Form />
                <div className={`justify-end md:mt-0 mt-5 md:grid hidden`}>
                    <p className="text-sm text-[#747474] font-normal">
                        Exchange
                    </p>
                    <Image src="/images/nse.png" alt="nse" width={56} height={26} />
                </div>
            </div>
            <div className={`p-3`}>
                <div className={`flex items-center mb-4 md:justify-between justify-end`}>
                    <h2 className={`text-xl font-normal font-interMedium text-[#9E9E9E] md:block hidden`}>
                        Top 50 Stocks <span className='text-xs text-skin-dark'>(By Volume)</span>
                    </h2>
                    <h3 className={`text-xl font-normal font-interMedium text-[#2B195A] flex justify-end items-center gap-2`}>
                        <BiSolidCheckboxChecked className='text-3xl font-extrabold text-[#D9D9D9]' />  Select All
                    </h3>
                </div>
                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-3'>
                    {data?.map((stock, idx) => (
                        <ul key={idx} className='w-full flex flex-col gap-3'>
                            <li onClick={() => handleStockClick(stock.id)}
                                className={`text-base font-normal font-interRegular rounded-[5px] py-3.5 px-5 flex flex-row w-full items-center gap-3 justify-between 
                                ${selectedStocks.includes(stock.id) ? 'bg-[#E7E7FF]' : 'md:bg-white bg-[#F9F9F9]'}`}>
                                {stock.name} <AiOutlinePlus className={`text-skin-dark text-xl font-extrabold ${selectedStocks.includes(stock.id) ? 'text-skin-primary rotate-45 transition-all ease-in-out' : ''}`} />
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StockBox