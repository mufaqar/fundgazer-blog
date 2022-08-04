import Link from 'next/link'
import { FaFacebook, FaInstagram, FaMediumM, FaTwitter } from 'react-icons/fa'
import {  GrLinkedinOption } from 'react-icons/gr'

export default function Footer() {
    return (
        <footer>
            <section className="bg-skin-bgFooter">
            <div className="container grid items-center grid-cols-1 py-12 mx-auto md:grid-cols-2">
                <div className="p-5">
                    <ul className="flex flex-row justify-between gap-5 md:flex-col">
                        <li>
                            <Link href="#">
                                <a className="text-base font-normal md:text-lg text-skin-light font-interRegular">About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/disclaimer">
                                <a className="text-base font-normal md:text-lg text-skin-light font-interRegular">Disclaimer</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="privacy-policy">
                                <a className="text-base font-normal md:text-lg text-skin-light font-interRegular">Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col p-5">
                    <ul className='flex justify-center mb-2 md:justify-end'>
                        <li>
                            <Link href="mailto:support@fundgazer.com">
                                <a className="text-base font-normal md:text-lg text-skin-light font-interRegular">support@fundgazer.com</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex justify-center space-x-3 md:justify-end">
                        <li className='p-[6px] bg-white rounded-lg'>
                            <Link href="#">
                                <a className="text-3xl text-[#2B195A]"><FaFacebook size={24}/></a>
                            </Link>
                        </li>
                        <li className='p-[6px] bg-white rounded-lg'>
                            <Link href="#">
                                <a className="text-3xl text-[#2B195A]"><FaTwitter size={24}/> </a>
                            </Link>
                        </li>
                        <li className='p-[6px] bg-white rounded-lg'>
                            <Link href="#">
                                <a className="text-3xl text-[#2B195A]"><GrLinkedinOption size={24} /> </a>
                            </Link>
                        </li>
                        <li className='p-[6px] bg-white rounded-lg'>
                            <Link href="#">
                                <a className="text-3xl text-[#2B195A]"><FaInstagram size={24}/> </a>
                            </Link>
                        </li>
                        <li className='p-[6px] bg-white rounded-lg'>
                            <Link href="#">
                                <a className="text-3xl text-[#2B195A]"><FaMediumM size={24}/> </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </section>
            <section className='bg-skin-dark'>
                <div className='container py-3 mx-auto'>
                    <div>
                        <p className='text-sm font-normal text-center md:text-base text-skin-light font-interRegular'>@Copyrighted by Fundgazer</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
