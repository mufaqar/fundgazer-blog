import { UpdownButton } from '@lyket/react'
import React from 'react'
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'

export default function ArticleContent({ data }) {
    return (
        <div className={`bg-white pt-[46px] px-[47px] pb-[293.17px] w-full h-full`}>
            <h2 className='md:text-[30px] leading-[36px] font-semibold font-interMedium mb-5 text-[#222222]'>
                {data?.art_name}
            </h2>
            <div>
                <p className='text-sm font-normal font-interRegular text-[#494949] mt-3'>
                    To avoid unfilled orders, we recommend investing a minimum of $2500 across your portfolio.
                </p>
                <p className='text-sm font-normal font-interRegular text-[#494949] mt-3'>
                    There are two reasons for this suggested minimum.
                </p>
                <div className='pl-5'>
                    <p className='text-sm font-normal font-interRegular text-[#494949] mt-3'>
                        Symphonies can contain fractionable and non-fractionable assets. For assets that are fractionable, wecan place orders for exact dollar amounts needed to match intended symphony allocations (e.g.,purchase $100 of SPY). For assets that are not fractionable, we will round down purchases to the nearest share. If you do not have enough funds to purchase one full share of a non-fractionable asset, then the money that would be allocated to this asset following symphony logic will instead be kept in cash.
                    </p>
                    <p className='text-sm font-normal font-interRegular text-[#494949] mt-3'>
                        The ability to use margin if necessary. Margin is enabled on Alpaca for accounts with over $2000, and, very rarely, we use small amounts of margin to fully execute buys/sells that would not be filled without access to margin. Margin makes it possible for us to utilize 100% of your portfolio and is for settlement purposes only. We suggest a buffer of at least an extra $500 (bringing up the portfolio minimum to $2500) to maintain margin in case one or more of your symphonies loses value. Because of volatility in the market and transaction fees, in order for us to execute a trade using the percentage allocations in a symphony, we sometimes need to place a buy order that’s slightly more than what your cash balance is in your portfolio. This amount is very small (generally $1) and is unlikely to lead to margin calls or any of the other dangers that come with leveraged trading—however, without it, we’d consistently be under - allocating your funds, losing potential returns. It also can cause the entire trade to fail, leading to a failed
                        rebalancing. We have measures in place to avoid the use of margin and have regular checks in place todetermine if margin would be used at the next trade and to make corrections before margin is used.
                    </p>
                </div>
                <p className='text-sm font-normal font-interRegular text-[#494949] mt-3'>
                    What happens if I invest less than $2500?
                </p>
                <p className='text-sm font-normal font-interRegular text-[#494949] mt-3'>
                    We currently have a required minimum of $50 in each symphony, which makes it possible to invest with less than $2000 in your account, but restricts your account’s use of margin. By investing a smaller amount, you may experience some of your portfolio being left in cash (e.g., due to the use of non-fractionable assets),
                    missing out on exposure to the assets you’ve selected.
                </p>
            </div>
            <h4 className='text-base font-bold font-interBold text-center mt-10'>
                Was it helpful?
            </h4>
            <div className="text-2xl text-center mt-6">
                <UpdownButton id={data.idx} namespace="blog" />
            </div>
        </div>
    )
}
