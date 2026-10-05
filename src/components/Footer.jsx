import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faFacebook, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import { PhoneCall } from 'lucide-react'

function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-[#000033] text-base-content p-10">
            <aside>
                <img
                    src={logo}
                    className='w-20 h-20 rounded-2xl'
                    alt="challenge logo"
                />
                <p className="text-white text-sm font-bold">
                    <span className='uppercase text-xl'>Challenge  Consulting</span>
                    <br />
                    Cotonou, Akpakpa-Dégakon
                </p>

                <p className='flex items-center gap-2 text-white text-sm font-bold'>
                    <PhoneCall className='w-10 h-8 text-[#ffcc33]' />
                    Tel: +229 01 61 04 83 42
                </p>
                <p className='flex items-center gap-2 text-white text-sm font-bold'>
                    <PhoneCall className='w-10 h-8 text-[#ffcc33]' />
                    Tel: +229 01 48 88 29 93
                </p>
                <p className='flex items-center gap-2 text-white text-sm font-bold'>
                    <PhoneCall className='w-10 h-8 text-[#ffcc33]' />
                    Tel: +229 01 97 31 16 57
                </p>
            </aside>

            <div>
                <h6 className="footer-title text-2xl text-[#ffcc33]">Our References</h6>
                <p className='w-100 text-white text-sm font-bold'>
                    Formal company, published in the Official Journal of the Republic of Benin No. 78 CFE of October 30, 2009, page 1089.

                    First Graphic Arts Examination Centre in Benin.
                    In accordance with Decision No. 410/MESTFP/DC/SGM/DEC/STEC/SA of August 29, 2019.

                    RCCM No. RB / COT 09A8533

                    Tax ID No.: 320091771813
                </p>
                <div className="flex mt-10">
                    <div>
                        <a className="link link-hover text-white font-bold underline"
                            href="https://www.tiktok.com/@challenge_consulting?_r=1&_t=ZS-9AIsYFpbHwG"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTiktok} size="3x" />
                        </a>
                        <a
                            className="link link-hover text-white font-bold underline"
                            href="https://youtube.com/@challenge_consulting?si=bZXX9_BDk_qEIQqF"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="3x" />
                        </a>
                        <a
                            className="link link-hover text-white font-bold underline"
                            href="https://www.facebook.com/cabinetchallengeconsulting"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="3x" />
                        </a>
                        <a
                            className="link link-hover text-white font-bold underline"
                            href="https://www.linkedin.com/company/centre-de-formation-en-informatique-audiovisuel-graphisme-design/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </a>
                    </div>
                </div>
            </div>
            <nav>
                <h6 className="footer-title text-2xl text-[#ffcc33]">Navigation</h6>
                <Link to="/" className="link link-hover text-white font-bold underline">CHALLENGE CONSULTING</Link>
                <Link to="/Tprogram" className="link link-hover text-white font-bold underline">Our Training Programs</Link>
                <Link to="/Services" className="link link-hover text-white font-bold underline">Services</Link>
                <Link to="/News" className="link link-hover text-white font-bold underline">News</Link>
                <Link to="/Gallery" className="link link-hover text-white font-bold underline">Gallery</Link>
                <Link to="/Contact" className="link link-hover text-white font-bold underline">Register</Link>
            </nav>
        </footer>
    )
}
export default Footer;