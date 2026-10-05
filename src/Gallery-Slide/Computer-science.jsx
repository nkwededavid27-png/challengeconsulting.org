import { useState, useEffect } from "react";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const images = [
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250129_160742_353_13_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250129_160917_302_15_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250129_160940_441_16_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250129_160943_676_17_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250129_160852_940_14_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/FORMATION-INFORMATIQUE-3-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/FORMATION-INFORMATIQUE-1-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/FORMATION-INFORMATIQUE-2-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/FORMATION-INFORMATIQUE-4-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20221122_115949-min.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20221122_114956-min.jpg",
];

export default function ComputerScienceSlideshow() {
    const [index, setIndex] = useState(0);

    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000); // change every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pt-30 max-w-4xl mt-0 md:mt-0 lg:mt-0 m-4 sm:m-4 md:mx-auto lg:mx-auto  rounded-3xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-10 text-[#000033]">
                Computer Science Training at CHALLENGE CONSULTING
            </h1>
            <div className="relative w-full h-205 overflow-hidden pt-20 max-w-5xl mx-auto rounded-3xl mb-10">
                <AnimatePresence>
                    <motion.div
                        key={index}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[index]})` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                </AnimatePresence>

                {/* Optional overlay for cinematic effect */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffcc00]">
                    We offer the best Computer Science training in the industry.
                </h1>
            </div>

            <div className=" w-full p-10 flex justify-center mt-10">
                <Link
                    to="/Gallery"
                    className="flex items-center justify-center uppercase p-4 lg:text-2xl bg-[#ffcc00] font-bold rounded-4xl  w-190"
                >
                    <ChevronLeft className="w-10 h-10 ml-2" color="#0e0c06" />
                    Back to Gallery
                </Link>
            </div>
            <CommentForm />
            <CommentsList />
        </div>
    );
}
