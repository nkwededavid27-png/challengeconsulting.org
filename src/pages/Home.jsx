import StatsSection from "../components/counter";
import { Link } from "react-router-dom";
import FloatingCard from "../components/Floating-card";
import { Settings, Printer, SmartphoneIcon, FilePlus, BarChart, Gift, School } from 'lucide-react'
import ImageSlideshow from "../components/image-carousel";
import Testimonials from "../components/Testimonials";
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'



function Home() {

    const posts = [
        {
            id: 1,
            title:
                "CHALLENGE CONSULTING: Pioneer and key player in professional examinations in Graphic Design in Benin",
            excerpt:
                "A center of excellence since 2018. Since 2018, CHALLENGE CONSULTING has distinguished itself by becoming the very first center in…",
            category: "Uncategorized",
            image:
                "https://challengeconsulting.org/wp-content/uploads/2025/11/7-1.jpg",
            link: "/News", // internal route instead of external URL
        },
        {
            id: 2,
            title:
                "CHALLENGE CONSULTING, a national pride in the field of Graphic Design and the Arts!",
            excerpt:
                "Since 2018, CHALLENGE CONSULTING has been proud to be the very first center in Benin officially selected as an examination center in…",
            category: "Uncategorized",
            image:
                "https://challengeconsulting.org/wp-content/uploads/2025/11/CHALLENGE-1-768x721.jpg",
            link: "/News", // ✅ internal route, same style as the first one
        },

        {
            id: 3,
            title:
                "Screen printing at CHALLENGE CONSULTING: learning through hands-on experience, for the real market",
            excerpt:
                "At CHALLENGE CONSULTING, screen printing training is based on a 100% practical and career-oriented approach. Thanks to…",
            category: "Uncategorized",
            image:
                "https://challengeconsulting.org/wp-content/uploads/2025/11/20240905_104626-min-768x1024.jpg",
            link: "/News",
        },
    ];
    return (
        <main>
            {/*Hero banner section */}


            {/* */}
            <div className="flex flex-col md:grid-cols-1 lg:flex-row gap-5 justify-around sm:pt-20 md:pt-30 lg:pt-25 pt-30 md:p-10">
                <div className="w-80 sm:m-auto sm:w-135 m-auto sm:h-230 lg:w-190 lg:h-210 bg-gray-200 rounded-4xl  md:h-180 md:text-2xl  md:w-180">
                    <h1 className="text-black text-center text-2xl m-3 lg:text md:text-4xl font-bold">CHALLENGE CONSULTING</h1>
                    <p className="text-xl md:text-3xl bg-[#000033]  text-center text-white p-3 ">
                        A leading organization serving young people for 15 years
                    </p>

                    <p className="text-2xl md:text-4xl bg-yellow-400  text-left text-[#000033] p-8 mt-5 font-black align-middle">
                        100% practical training courses
                    </p>

                    <p className="text-base  text-black p-2 ">
                        <span className="font-bold">CHALLENGE CONSULTING</span> is a Beninese company based in Cotonou and recognized as a national leader in <span className="font-bold">professional training</span> and <span className="font-bold">digital services</span> .
                        We offer specialized training and services in <span className="font-bold">IT , Audiovisual , Graphic Design </span>, and <span className="font-bold">Screen Printing</span> , with a strong emphasis on practical application and effectiveness. <br /><br />

                        For over <span className="font-bold">15 years </span>, we have been supporting young people and professionals through more than <span className="font-bold">20 career-oriented training courses</span> , designed to promote success, self-employment and rapid integration into the job market. <br /><br />

                        Founded by <span className="font-bold">Wilfried G. AZIMBLIGBO </span> , an IT specialist passionate about skills development in Africa, CHALLENGE CONSULTING was born from a clear vision: <span className="font-bold">to unlock the potential of talent and meet the real needs of the market </span>.
                        Our mission is to offer <span className="font-bold">practical expertise </span> , solid skills, and the <span className="font-bold">confidence necessary</span> to build a sustainable career in a constantly evolving environment.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center  gap-3 m-5">
                        <Link to="/Tprogram" className="btn bg-yellow-400 font-black rounded-3xl md:pl-10 md:pr-10 pl-10 pr-10  p-6">
                            Discover our training <br />programs
                        </Link>
                        <a href="https://wa.me/0161048342" target="_blank" rel="noopener noreferrer" className="btn bg-yellow-400 font-black text-white rounded-3xl pl-10  pr-10 p-5">
                            Join us on WhatsApp
                        </a>
                    </div>
                </div>

                <div>
                    <ImageSlideshow />
                </div>
            </div>


            {/*Section for countdown*/}
            <StatsSection />


            <div className="text-center bg-[#000033] lg:m-10 md:m-5 sm:m-5 rounded-4xl m-5">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold p-8">Why choose CHALLENGE CONSULTING?</h1>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 m-auto">

                <div className="flex mt-10">
                    <div className="w-1 h-60 ml-10 bg-[#000033] "></div>
                    <div className="mt-10 hover:text-[#000033]">
                        <Link to="/Gallery" className="flex group hover:bg-white pl-3 rounded transition-colors duration-300" href='#'>
                            {/* Icon */}
                            <Settings className="text-[#000033] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-1 group-hover:text-[#ffcc00] transition-colors duration-300" />

                            {/* Heading */}
                            <h3 className="text-2xl w-60 font-bold text-[#000033] ml-2 group-hover:text-[#ffcc00] transition-colors duration-300">
                                A benchmark since 2008
                            </h3>

                        </Link>

                        <div className="">
                            <p className="w-50 font-serif text-[#000033] mt-2 ml-24">
                                For over 15 years, we have been offering quality training adapted to the realities of the African and international market.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex mt-10">
                    <div className="w-1 h-60 ml-10 bg-[#000033] "></div>
                    <div className="mt-10 hover:text-[#000033]">
                        <Link to="/Gallery" className="flex group hover:bg-white pl-3 rounded transition-colors duration-300" href='#'>
                            {/* Icon */}
                            <Printer className="text-[#000033] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-1 group-hover:text-[#ffcc00] transition-colors duration-300" />

                            {/* Heading */}
                            <h3 className="text-2xl w-60 font-bold text-[#000033] ml-2 group-hover:text-[#ffcc00] transition-colors duration-300">
                                Highly experienced trainers
                            </h3>

                        </Link>

                        <div className="">
                            <p className="w-50 font-serif text-[#000033] mt-2 ml-24">
                                Passionate trainers who combine pedagogy and field expertise.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex mt-10">
                    <div className="w-1 h-60 ml-10 bg-[#000033] "></div>
                    <div className="mt-10 hover:text-[#000033]">
                        <Link to="/Gallery" className="flex group hover:bg-white pl-3 rounded transition-colors duration-300" href='#'>
                            {/* Icon */}
                            <School className="text-[#000033] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-1 group-hover:text-[#ffcc00] transition-colors duration-300" />
                            <SmartphoneIcon className="text-[#000033] w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 group-hover:text-[#ffcc00] transition-colors duration-300" />

                            {/* Heading */}
                            <h3 className="text-2xl font-bold text-[#000033] ml-2 group-hover:text-[#ffcc00] transition-colors duration-300">
                                Very comfortable training rooms
                            </h3>

                        </Link>

                        <div className="">
                            <p className="w-50 font-serif text-[#000033] mt-2 ml-24">
                                We have modern, fully equipped rooms with all the necessary logistics and a high-speed internet connection.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex  mt-10">
                    <div className="w-1 h-60 ml-10 bg-[#000033] "></div>
                    <div className="mt-10 hover:text-[#000033]">
                        <Link to="/Gallery" className="flex group hover:bg-white pl-3 rounded transition-colors duration-300" href='#'>
                            {/* Icon */}
                            <FilePlus className="text-[#000033] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-1 group-hover:text-[#ffcc00] transition-colors duration-300" />

                            {/* Heading */}
                            <h3 className="text-2xl font-bold text-[#000033] ml-2 group-hover:text-[#ffcc00] transition-colors duration-300">
                                Highly practical training
                            </h3>

                        </Link>

                        <div className="">
                            <p className="w-50 font-serif text-[#000033] mt-2 ml-24">
                                Our training courses are mostly practical, enriched with a solid theoretical foundation.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex  mt-10">
                    <div className="w-1 h-60 ml-10 bg-[#000033] "></div>
                    <div className="mt-10 hover:text-[#000033]">
                        <Link to="/Gallery" className="flex group hover:bg-white pl-3 rounded transition-colors duration-300" href='#'>
                            {/* Icon */}
                            <BarChart className="text-[#000033] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-1 group-hover:text-[#ffcc00] transition-colors duration-300" />

                            {/* Heading */}
                            <h3 className="text-2xl font-bold text-[#000033] ml-2 group-hover:text-[#ffcc00] transition-colors duration-300">
                                Educational internships and outings
                            </h3>

                        </Link>

                        <div className="">
                            <p className="w-50 font-serif text-[#000033] mt-2 ml-24">
                                Partnership with several companies + educational outings for our learners.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex  mt-10">
                    <div className="w-1 h-60 ml-10 bg-[#000033] "></div>
                    <div className="mt-10 hover:text-[#000033]">
                        <Link to="/Gallery" className="flex group hover:bg-white pl-3 rounded transition-colors duration-300" href='#'>
                            {/* Icon */}
                            <Gift className="text-[#000033] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-1 group-hover:text-[#ffcc00] transition-colors duration-300" />

                            {/* Heading */}
                            <h3 className="text-2xl font-bold text-[#000033] ml-2 group-hover:text-[#ffcc00] transition-colors duration-300">
                                A benchmark since 2008
                            </h3>

                        </Link>

                        <div className="">
                            <p className="w-50 font-serif text-[#000033] mt-2 ml-24">
                                Validate your skills with state-recognized diplomas after passing the Certificate of Qualifications for Trades (CQM) exam.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="text-center bg-[#000033] lg:m-10 md:m-5 sm:m-5 rounded-4xl m-5">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold p-8">Our professional training courses</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 m-auto">
                <div className="relative sm:w-155 md:w-180 lg:w-230 group transition sm:m-auto m-auto">
                    <img
                        className=" lg:ml-5 mt-10 mr-2 w-80 h-160 sm:w-155 md:w-180 lg:w-230 lg:h-150 rounded-3xl object-cover"
                        src={img6}
                        alt="training img"
                    />

                    <div className="absolute inset-0 flex items-baseline-last justify-center">
                        <h2 className="text-white text-left  mb-20 text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-bold px-4 py-2 rounded
                        [text-shadow:8px_8px_12px_rgba(0,0,0,1)]">
                            Computer science
                        </h2>
                    </div>
                </div>


                <div className="relative sm:w-155 md:w-180 lg:ml-70 lg:w-80 sm:m-auto md:mt-10 m-auto">
                    <img
                        className="  w-80 h-160 mt-10 lg:m-0.5 sm:mt-10  sm:w-155 md:w-180 lg:w-110 lg:h-150 rounded-3xl object-cover "
                        src={img7}
                        alt="training img"
                    />

                    <div className="absolute inset-0 flex items-baseline-last justify-center">
                        <h2 className="text-white text-left  mb-20 text-5xl sm:text-6xl md:text-6xl lg:text-5xl font-bold px-4 py-2 rounded
                        [text-shadow:8px_8px_12px_rgba(0,0,0,1)]">
                            Audio-visual
                        </h2>
                    </div>
                </div>
            </div>

            <div className="grid w-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 m-auto">
                <div className="relative group transition md:m-auto sm:m-auto m-auto">
                    <img
                        className=" lg:ml-5  mt-10  w-80 h-160 sm:w-155 md:w-180 lg:w-105 lg:h-150 rounded-3xl object-cover"
                        src={img8}
                        alt="triaining image"
                    />

                    <div className="absolute inset-0 flex items-baseline-last justify-center">
                        <h2 className="text-white mb-20 text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold px-4 py-2 
                        [text-shadow:8px_8px_12px_rgba(0,0,0,1)]">
                            Graphic design
                        </h2>
                    </div>
                </div>

                <div className="relative group transition md:m-auto sm:m-auto m-auto">
                    <img
                        className="mt-10 w-80 h-160 sm:w-155 md:w-180 lg:w-110 lg:h-150 rounded-3xl object-cover"
                        src={img11}
                        alt="triaining image"
                    />

                    <div className="absolute inset-0 flex items-baseline-last justify-center">
                        <h2 className="text-white  mb-20 text-4xl sm:text-6xl md:text-6xl lg:text-5xl font-bold px-4 py-2 
                        [text-shadow:8px_8px_12px_rgba(0,0,0,1)]">
                            Screen printing
                        </h2>
                    </div>
                </div>

                <div className="relative group transition md:m-auto sm:m-auto m-auto">
                    <img
                        className="mt-10  w-80 h-160 sm:w-155 md:w-180 lg:w-120 lg:h-74 rounded-3xl object-cover"
                        src={img10}
                        alt="triaining image"
                    />

                    <div className="absolute inset-0 flex items-baseline-last justify-center">
                        <h2 className="text-white mb-190 sm:mb-190 md:mb-190 lg:mb-85 text-3xl sm:text-5xl md:text-5xl lg:text-3xl font-bold px-4 py-2 
                        [text-shadow:8px_8px_12px_rgba(0,0,0,1)]">
                            Web development and digital solutions design
                        </h2>
                    </div>

                    <img
                        className="mt-10 sm:mt-10 md:mt-10 lg:mt-2  w-80 h-160 sm:w-155 md:w-180 lg:w-120 lg:h-74 rounded-3xl object-cover"
                        src={img9}
                        alt="triaining image"
                    />

                    <div className="absolute inset-0 flex items-baseline-last justify-center">
                        <h2 className="text-white mb-15 sm:mb-15 md:mb-15 lg:mb-15 text-3xl sm:text-5xl md:text-5xl lg:text-3xl font-bold px-4 py-2 
                        [text-shadow:8px_8px_12px_rgba(0,0,0,1)]">
                            Computer Maintenance + Electronic Networks + GSM
                        </h2>
                    </div>
                </div>
            </div>


            <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:h-80 bg-[#ffcc00] m-6 sm:m-6 md:m-5 lg:m-10 mt-10 rounded-4xl">
                <div className="text-center ">
                    <h1 className="font-extrabold text-2xl p-12 text-left lg:w-180 lg:ml-10">First Graphic Design Examination Center in Benin</h1>
                    <p className="text-xl text-left lg:ml-20 lg:w-190 ml-5">
                        In accordance with Decision No.410/MESTFP/DC <br />/SGM/DEC/STEC/SA of August 29,2019.
                    </p>
                </div>

                <div className=" text-center">
                    <a className="btn rounded-2xl bg-white text-center mt-5 mb-5 lg:mt-20 pt-8 pb-8 pl-13 pr-13 font-bold text-xl" href="https://wa.me/0161048342" target="_blank" rel="noopener noreferrer">
                        Join us via WhatsApp
                    </a>
                </div>
            </div>





           


            {/*Section for floating card*/}
            <FloatingCard />


            <Testimonials />

            <section className="px-6 py-12">
                <h2 className="text-3xl font-bold mb-8 text-center">News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <Link to={post.link} aria-label={post.title}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 object-cover"
                                />
                            </Link>
                            <div className="p-4">
                                <span className="inline-block bg-yellow-400 text-sm font-semibold uppercase px-3 py-1 rounded">
                                    {post.category}
                                </span>
                                <h3 className="mt-3 text-xl font-bold">
                                    <Link to={post.link} className="hover:text-blue-600">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-gray-700">{post.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>



        </main>
    )
}
export default Home;