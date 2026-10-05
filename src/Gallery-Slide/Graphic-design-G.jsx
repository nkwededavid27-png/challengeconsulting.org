import { useState, useEffect } from "react";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const images = [
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250207_174832_509-min-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-3_2_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-6_5_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-2_1_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-4_3_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/image-1-min-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-7_6_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250210_172726_8382-min-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250207_174908_790-min-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250207_174708_712-min-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-8_7_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20230605_155917-min.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-10_9_11zon-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20230605_155741-min.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20230605_125048-min.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20240129_165925_509-min-scaled.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20230605_125001-min.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/DSC_6292-min.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/DSC_6293-min.jpg",
    "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-5_4_11zon.jpg",
];

export default function GraphicDesignSlideshow() {
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
                Graphic design Training at CHALLENGE CONSULTING
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
                    We offer the best Graphic design training in the industry.
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
