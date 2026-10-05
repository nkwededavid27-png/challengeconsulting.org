import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioVisualProffession() {
    const title = 'Audiovisual Professions'
    const [activeTab1, setActiveTab1] = useState("choice");
    return (
        <div className="pt-20">
            <div className="w-full text-center p-10 bg-[#ffcc00]">
                <h1 className="text-center text-3xl text-black font-bold">{title}</h1>
            </div>

            <div className="w-full mt-10">
                <img
                    src="https://challengeconsulting.org/wp-content/uploads/2025/11/11-METIERS-DE-LAUDIOVISUEL-2048x2048-1-768x768.jpg"
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
                                    <li><span className="text-base">1️⃣</span>Introduction to audiovisual media and its fields of application.</li>
                                    <li><span className="text-base">2️⃣</span>Basics of photography: light, framing and composition.</li>
                                    <li><span className="text-base">3️⃣</span>Mastering the digital camera (settings & techniques).</li>
                                    <li><span className="text-base">4️⃣</span>Photo retouching with Adobe Photoshop and Lightroom.</li>
                                    <li><span className="text-base">5️⃣</span>Introduction to video framing: angles, movements and shots.</li>
                                    <li><span className="text-base">6️⃣</span>Use of cameras and audiovisual equipment.</li>
                                    <li><span className="text-base">7️⃣</span>Sound recording techniques and audio management.</li>
                                    <li><span className="text-base">8️⃣</span>Video editing with Adobe Premiere Pro and DaVinci Resolve.</li>
                                    <li><span className="text-base">9️⃣</span>Special effects and video graphics with After Effects.</li>
                                    <li>🔟Creation of a professional audiovisual project (short film, commercial, music video, documentary, etc.).</li>
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
                                    <li>✅  Professional photographer (studio, events, press)</li>
                                    <li>✅Cameraman / TV or film camera operator</li>
                                    <li>✅Video editor for agencies, TV, film, social media</li>
                                    <li>✅Music video and commercial director</li>
                                    <li>✅Audiovisual manager in a company or NGO</li>
                                    <li>✅Community manager specializing in visual content</li>
                                    <li>✅Graphic designer and image retoucher</li>
                                    <li>✅Digital Transformation Consultant, Digital</li>
                                    <li>✅Audiovisual technician for shows and events</li>
                                    <li>✅Audiovisual entrepreneur (photo/video studio, production agency)</li>
                                    <li>✅Content creator (YouTube, TikTok, social media)</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="bg-amber-100 w-full p-10 flex justify-center mt-10">
                <Link
                    to="/Single"
                    className="flex items-center justify-center uppercase p-4 lg:text-2xl bg-[#ffcc00] font-bold rounded-4xl  w-190"
                >
                    <ChevronLeft className="w-10 h-10 ml-2" color="#0e0c06" />
                    Back to Single-discipline training programs
                </Link>
            </div>
        </div>
    )
}