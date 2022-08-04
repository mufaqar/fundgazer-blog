import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMedium, FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <section className="bg-skin-bgFooter">
            <div className="container mx-auto py-12 grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="p-5">
                    <ul className="flex md:flex-col flex-row gap-5 justify-between">
                        <li>
                            <Link href="#">
                                <a className="md:text-lg text-base font-normal text-skin-light font-interRegular">About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/disclaimer">
                                <a className="md:text-lg text-base font-normal text-skin-light font-interRegular">Disclaimer</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="privacy-policy">
                                <a className="md:text-lg text-base font-normal text-skin-light font-interRegular">Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="p-5 flex flex-col">
                    <ul className='flex md:justify-end justify-center mb-2'>
                        <li>
                            <Link href="mailto:support@fundgazer.com">
                                <a className="md:text-lg text-base font-normal text-skin-light font-interRegular">support@fundgazer.com</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex space-x-3 md:justify-end justify-center">
                        <li>
                            <Link href="#">
                                <a className="text-4xl text-skin-light"><FaFacebookSquare /></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-4xl text-skin-light"><FaTwitterSquare /> </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-4xl text-skin-light"><FaLinkedin /> </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-4xl text-skin-light"><FaInstagramSquare /> </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-4xl text-skin-light"><FaMedium /> </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </section>
            <section className='bg-skin-dark'>
                <div className='container mx-auto py-3'>
                    <div>
                        <p className='md:text-base text-sm font-normal text-skin-light text-center font-interRegular'>@Copyrighted by Fundgazer</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
