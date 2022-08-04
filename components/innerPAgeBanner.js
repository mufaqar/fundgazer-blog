import Image from 'next/image'

export default function InnerPAgeBanner() {
    return (
        <>
            {/* Banner Section Start*/}
            <section className="bg-skin-primary relative py-16">
            <Image src="/images/innerBg.png" alt='innerBg.png' layout="fill" className='object-cover opacity-10'></Image>
                <div className='container mx-auto py-20 grid md:grid-cols-2 grid-cols-1 gap-8'>
                </div>
            </section>
            {/* Banner Section End*/}
        </>
    )
}
