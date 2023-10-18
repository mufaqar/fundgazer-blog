import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

function AlertBox() {
    return (
        <div className='bg-white py-6 px-5 rounded-[5px] flex gap-5'>
            <FiAlertTriangle size={36} strokeWidth={3} className='text-[#E86A34]' />
            <div>
                <p className='text-base font-bold'>
                    Disclaimer
                </p>
                <p className='text-sm font-normal max-w-[283px] mt-2'>
                    past results are not an indicator of future results.
                    dfasdfasdfadfasdf
                </p>
            </div>
        </div>
    )
}

export default AlertBox