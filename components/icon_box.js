import Image from 'next/image'
import React from 'react'

function IconBox({title, content}) {
    return (
        <div>
            <Image src="/images/rings.png" alt="/images/rings.png" width={133} height={126} className='mx-auto' />
            <h3 className='text-[21px] leading-[32px] font-semibold font-interMedium text-center mt-3'>
                {title}
            </h3>
            <p className='text-base font-normal font-interRegular tracking-[0.5px] text-center mt-3'>
              {content}
            </p>
        </div>
    )
}

export default IconBox