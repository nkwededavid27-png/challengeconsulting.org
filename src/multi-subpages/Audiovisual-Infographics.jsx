import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudiovisualInfographics() {
    const title = 'Audiovisual + Infographics'
    const [activeTab1, setActiveTab1] = useState("choice");
    return (
        <div className="pt-20">
            <div className="w-full text-center p-10 bg-[#ffcc00]">
                <h1 className="text-center text-3xl text-black font-bold">{title}</h1>
            </div>

            <div className="w-full mt-10">
                <img
                    src="https://challengeconsulting.org/wp-content/uploads/2025/11/12-AUDIOVISUEL-INFOGRAPHIE-1024x1006-3-768x755.jpg"
                    alt={title}
                    className="w-210 h-200 border-4 rounded-xl border-black m-auto"
                />
            </div>

            <div className="w-full mt-10">
                {/* Tab Navigation */}
                <ul className="flex justify-center border-b border-gray-300">
                    <li>
                        <button
                            onClick={() => setActiveTab1("choice")}
                            className={`px-6 py-3 text-xl font-bold transition ${activeTab1 === "choice"
                                ? "bg-yellow-400 text-blue-950 rounded-t-lg"
                                : "hover:bg-blue-950 hover:text-white text-gray-700"
                                }`}
                        >
                            Programs
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveTab1("advantages")}
                            className={`px-6 py-3 text-xl font-bold transition ${activeTab1 === "advantages"
                                ? "bg-yellow-400 text-blue-950 rounded-t-lg"
                                : "hover:bg-blue-950 hover:text-white text-gray-700"
                                }`}
                        >
                            Career opportunities after training
                        </button>
                    </li>
                </ul>

                {/* Tab Content with Animation */}
                <div className="bg-white shadow-md rounded-b-lg p-6 w-87 sm:w-150 md:w-190 lg:w-250 m-auto border-2 border-black">
                    <AnimatePresence mode="wait">
                        {activeTab1 === "choice" && (
                            <motion.div
                                key="choice"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li><span className="text-base">1️⃣</span> Introduction to professional photography techniques</li>
                                    <li><span className="text-base">2️⃣</span> Framing and camera operation</li>
                                    <li><span className="text-base">3️⃣</span> Video editing techniques (Premiere Pro, DaVinci Resolve, After Effects)</li>
                                    <li><span className="text-base">4️⃣</span> Basic sound engineering and audio mixing</li>
                                    <li><span className="text-base">5️⃣</span> Concepts of visual storytelling and content creation</li>
                                    <li><span className="text-base">6️⃣</span> Computer graphics and visual design (Photoshop, Illustrator, InDesign)</li>
                                    <li><span className="text-base">7️⃣</span> Creation of multimedia graphic materials (flyers, posters, banners, web visuals)</li>
                                    <li><span className="text-base">8️⃣</span> Design of graphic charters and visual identities</li>
                                    <li><span className="text-base">9️⃣</span> Production of corporate, advertising, and artistic videos</li>
                                    <li><span className="text-base">🔟</span> Completion of projects combining video and graphic design</li>
                                </ul>
                            </motion.div>
                        )}

                        {activeTab1 === "advantages" && (
                            <motion.div
                                key="advantages"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>✅ Professional photographer</li>
                                    <li>✅ Videographer and editor</li>
                                    <li>✅ Graphic designer / multimedia designer</li>
                                    <li>✅ Advertising content creator</li>
                                    <li>✅ Corporate visual communication manager</li>
                                    <li>✅ Independent contractor (freelance audiovisual and graphic designer)</li>
                                    <li>✅ Social media content producer (YouTube, TikTok, Instagram)</li>
                                    <li>✅ Audiovisual technician for media outlets (TV, agencies, institutions)</li>
                                    <li>✅ Visual designer for advertising agencies or creative studios</li>
                                    <li>✅ Audiovisual and graphic design entrepreneur</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="bg-amber-100 w-full p-10 flex justify-center mt-10">
                <Link
                    to="/Multi"
                    className="flex items-center justify-center uppercase p-4 lg:text-2xl bg-[#ffcc00] font-bold rounded-4xl  w-190"
                >
                    <ChevronLeft className="w-10 h-10 ml-2" color="#0e0c06" />
                    Back to Multi-discipline training programs
                </Link>
            </div>
        </div>
    )
}