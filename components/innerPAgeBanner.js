import Image from 'next/image'

export default function InnerPAgeBanner() {
    return (
        <>
            {/* Banner Section Start*/}
            <section className="relative py-16 mt-20 bg-skin-primary">
            <Image src="/images/innerBg.png" alt='innerBg.png' layout="fill" className='object-cover opacity-10'></Image>
                <div className='container grid grid-cols-1 gap-8 py-20 mx-auto md:grid-cols-2'>
                </div>
            </section>
            {/* Banner Section End*/}
        </>
    )
}
