import React, { useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'

function Faqs_Sec() {
    const [openFaq, setOpenFaq] = useState(0)
    const handleFaqs = (id) => {
        if (openFaq === id) {
            return setOpenFaq(null)
        }
        setOpenFaq(id)
    }
    return (
        <section className='py-20 px-5'>
            <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-5'>
                <div>
                    <h2 className='md:text-[48px] md:leading-[64px] text-2xl font-semibold font-interLight'>
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className='md:col-span-2'>
                    <ul className="">
                        {faqs?.map((item, idx) => (
                            <li onClick={() => handleFaqs(idx)} key={idx} className='py-4 border-b border-black/25'>
                                <h4 className='md:text-[19px] text-base leading-[24px] font-normal font-interRegular cursor-pointer flex justify-between items-center'>
                                    {item?.question}
                                    <BsChevronRight className={`${openFaq === idx ? "transform rotate-90 transition duration-300" : "rotate-0 transform transition duration-300"}`} />
                                </h4>
                                <p className={openFaq === idx ? 'block mt-4 text-gray-500' : 'hidden'}>
                                    {item?.answer}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Faqs_Sec

const faqs = [
    {
        question: 'How do I get started?',
        answer:
            'Well no, but if you move your company offshore you can probably ignore it.',
    },
    {
        question: 'What fees does Composer charge?',
        answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
        question: 'How are trades executed, and who is Alpaca?',
        answer:
            'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
    {
        question: 'Can non-US residents use Composer?',
        answer:
            'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
    {
        question: 'Where will my assets be held?',
        answer:
            'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
    {
        question: 'Who is Composer?',
        answer:
            'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
    {
        question: 'Can I transfer funds from another platform?',
        answer:
            'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
]