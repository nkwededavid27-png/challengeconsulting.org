import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import FloatingCard from "../components/Floating-card";

const News = () => {
    const images = [
        "https://challengeconsulting.org/wp-content/uploads/2025/11/CHALLENGE-3.png",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/CHALLENGE-2.png",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/CHALLENGE-1.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/7-1.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/14-20251122-134817.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/21-20251122-134820.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/51-20251122-134823.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20201026_094403-20251122-134839-scaled.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/Formation-audio-challenge-1.png",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/Formation-audio-challenge-3.png",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/Formation-audio-challenge-2.png",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/GLORIA-CHALLENGE--scaled.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20210829_1738452.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20210829_182028_1523-scaled.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/Sortie.png",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/311302214_8936404629706787_8504077098303720391_n-min-1.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/cc.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/ch-1.jpg",
        "https://challengeconsulting.org/wp-content/uploads/2025/11/ch-3.jpg",
    ];

    const posts = [
        {
            title:
                "CHALLENGE CONSULTING: Pioneer and key player in professional examinations in Graphic Design in Benin",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/7-1.jpg",
            link: "/News1",
            date: "November 25, 2025",
            excerpt:
                "A leading center since 2018. Since 2018, CHALLENGE CONSULTING has distinguished itself by becoming the very first center in Benin officially recognized as an examination center in Graphic Design...",
        },
        {
            title:
                "CHALLENGE CONSULTING, a national pride in the field of Graphic Design and the Arts!",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/CHALLENGE-1-1024x962.jpg",
            link: "/News2",
            date: "November 22, 2025",
            excerpt:
                "Since 2018, CHALLENGE CONSULTING has been proud to be the very first center in Benin officially recognized as an examination center in Art and Graphic Design...",
        },
        {
            title:
                "Screen printing at CHALLENGE CONSULTING: learning through hands-on experience, for the real market",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/20240905_104626-min-768x1024.jpg",
            link: "/News3",
            date: "November 21, 2025",
            excerpt:
                "At CHALLENGE CONSULTING, screen printing training is based on a 100% practical and career-oriented approach. Thanks to the trust of several partner schools, companies, and organizations...",
        },
        {
            title:
                "Real-life experiences thanks to our partnerships with the media",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20210829_175046-768x1024.jpg",
            link: "/News4",
            date: "November 21, 2025",
            excerpt:
                "At CHALLENGE CONSULTING, audiovisual training goes far beyond theoretical courses. We believe that to become a good professional, you need to experience the realities of the field...",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // 3 seconds per slide
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="pt-20">
            <div className="bg-[#000033] text-center p-15 mb-10">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white font-bold">Stay informed about CHALLENGE CONSULTING news</h1>
            </div>
            <div className="relative w-full h-125 overflow-hidden rounded-2xl shadow-lg pt-50">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            <FloatingCard />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    >
                        <Link to={post.link}>
                            <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-150 object-cover"
                            />
                        </Link>
                        <div className="p-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-2">
                                <Link to={post.link}>
                                    {post.title}
                                </Link>
                            </h2>
                            <div className="text-sm text-gray-500 mb-3">
                                <i className="icon-calendar3 mr-1"></i>
                                {post.date}
                            </div>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <Link
                                to={post.link}
                                className="inline-block px-4 py-2 bg-yellow-400 text-blue-950 font-semibold rounded-lg hover:bg-blue-950 hover:text-white transition"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:h-80 bg-[#ffcc00] m-6 sm:m-6 md:m-5 lg:m-10 mt-10 rounded-4xl">
                <div className="text-center ">
                    <h1 className="font-extrabold text-2xl lg:text-4xl p-12 text-left lg:w-180 lg:ml-10">First Graphic Design Examination Center in Benin</h1>
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

        </div>
    );
};

export default News;
