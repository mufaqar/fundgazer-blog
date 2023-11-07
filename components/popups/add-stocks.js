import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { BiSolidChevronRight } from 'react-icons/bi';
import Search_Form from './search-form';
import { stocks } from '../../const/stock';
import StockBox from './stock-box';
import Image from 'next/image';

function Add_Stocks({ addStock, setAddStock }) {

    const [displayedStocks, setDisplayedStocks] = useState(6); // Initial number of displayed stocks
    const [showAllStocks, setShowAllStocks] = useState(false);
    const [selectedStocks, setSelectedStocks] = useState([]); // Initially selected stocks
    const [model, setModel] = useState(false)
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
        <>
            <div className={`md:bg-[#F7F7F9] max-w-[751px] w-full mx-auto md:px-12 px-4 py-8 ${model ? "hidden" : "block"}`}>
                <div className='flex justify-between items-center'>
                    <h3 className='md:text-2xl font-extrabold font-interBold text-skin-primary w-full'>
                        Add Stocks
                    </h3>
                    <AiOutlineClose className='text-xl font-extrabold cursor-pointer' onClick={() => setAddStock(false)} />
                </div>
                <div className="flex md:flex-row flex-col justify-between my-10">
                    <Search_Form />
                    <div className={`grid justify-end md:mt-0 mt-5 `}>
                        <p className="text-sm text-[#747474] font-normal">
                            Exchange
                        </p>
                        <Image src="/images/nse.png" alt="nse" width={56} height={26} />
                    </div>
                </div>
                <div className={`md:border-0 border border-[#C4C4C4] rounded-md md:p-0 p-3`}>
                    <div className="mb-5">
                        <h2 className={`text-xl font-normal font-interMedium text-[#9E9E9E]`}>
                            Top 50 Stocks <span className='text-xs text-skin-dark'>(By Volume)</span>
                        </h2>
                    </div>
                    <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            stocks.slice(0, 6).map((stock, idx) => (
                                <ul key={idx} className='w-full flex flex-col gap-3'>
                                    <li onClick={() => handleStockClick(stock.id)}
                                        className={`text-base font-normal font-interRegular rounded-[5px] py-3.5 px-5 flex flex-row w-full items-center gap-3 justify-between 
                                ${selectedStocks.includes(stock.id) ? 'bg-[#E7E7FF]' : 'md:bg-white bg-[#F9F9F9]'}`}>
                                        {stock.name} <AiOutlinePlus className={`text-skin-dark text-xl font-extrabold ${selectedStocks.includes(stock.id) ? 'text-skin-primary rotate-45 transition-all ease-in-out' : ''}`} />
                                    </li>
                                </ul>
                            ))}
                    </div>
                    <button className="mt-10 p-2 text-sm font-normal font-interMedium text-skin-dark hover:text-skin-primary flex gap-2 w-fit mx-auto text-center"
                        onClick={() => setModel(true)} >
                        View All <BiSolidChevronRight className='text-xl font-extrabold' />
                    </button>
                </div>
                <div className={`md:border-0 border border-[#C4C4C4] rounded-md md:p-0 p-3 mt-8`}>
                    <div className="mb-5">
                        <h2 className={`text-xl font-normal font-interMedium text-[#9E9E9E]`}>
                            Top 50 Stocks <span className='text-xs text-skin-dark'>(By Volume)</span>
                        </h2>
                    </div>
                    <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            stocks.slice(0, 6).map((stock, idx) => (
                                <ul key={idx} className='w-full flex flex-col gap-3'>
                                    <li onClick={() => handleStockClick(stock.id)}
                                        className={`text-base font-normal font-interRegular rounded-[5px] py-3.5 px-5 flex flex-row w-full items-center gap-3 justify-between 
                                ${selectedStocks.includes(stock.id) ? 'bg-[#E7E7FF]' : 'md:bg-white bg-[#F9F9F9]'}`}>
                                        {stock.name} <AiOutlinePlus className={`text-skin-dark text-xl font-extrabold ${selectedStocks.includes(stock.id) ? 'text-skin-primary rotate-45 transition-all ease-in-out' : ''}`} />
                                    </li>
                                </ul>
                            ))}
                    </div>
                    <button className="mt-10 p-2 text-sm font-normal font-interMedium text-skin-dark hover:text-skin-primary flex gap-2 w-fit mx-auto text-center"
                        onClick={() => setModel(true)} >
                        View All <BiSolidChevronRight className='text-xl font-extrabold' />
                    </button>
                </div>
            </div>
            <div className={`${model ? "block" : "hidden"}`}>
                <StockBox data={stocks} model={model} setModel={setModel} selectedStocks={selectedStocks} setSelectedStocks={setSelectedStocks} />
            </div>
        </>
    );
}

export default Add_Stocks;