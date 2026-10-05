import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GraphicDesignWebDevelopment() {
    const title = 'Graphic Design + Web Development'
    const [activeTab1, setActiveTab1] = useState("choice");
    return (
        <div className="pt-20">
            <div className="w-full text-center p-10 bg-[#ffcc00]">
                <h1 className="text-center text-3xl text-black font-bold">{title}</h1>
            </div>

            <div className="w-full mt-10">
                <img
                    src="https://challengeconsulting.org/wp-content/uploads/2025/11/8-GRAPHISME-DESIGN-DEVELOPPEMENT-WEB-1024x1024-2-768x768.jpg"
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
                                    <li><span className="text-base">1️⃣</span> Introduction to Graphic Design and Visual Communication</li>
                                    <li><span className="text-base">2️⃣</span> Proficiency in Adobe Photoshop, Illustrator, and InDesign</li>
                                    <li><span className="text-base">3️⃣</span> Creation of graphic charters, logos, posters, and advertising materials</li>
                                    <li><span className="text-base">4️⃣</span> Web interface design (UI/UX Design)</li>
                                    <li><span className="text-base">5️⃣</span> Introduction to web development: HTML & CSS</li>
                                    <li><span className="text-base">6️⃣</span> Responsive layout and principles of modern web design</li>
                                    <li><span className="text-base">7️⃣</span> JavaScript and introduction to interactive animations</li>
                                    <li><span className="text-base">8️⃣</span> Use of CMS (WordPress) and creation of dynamic websites</li>
                                    <li><span className="text-base">9️⃣</span> Integration of graphic design into web development</li>
                                    <li><span className="text-base">🔟</span> Completion of practical projects: visual identity + complete website</li>
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
                                    <li>✅ Web and print graphic designer</li>
                                    <li>✅ UI/UX designer</li>
                                    <li>✅ Freelance or agency web designer</li>
                                    <li>✅ Front-end web developer</li>
                                    <li>✅ Website creator for businesses and individuals</li>
                                    <li>✅ Visual and digital communication manager</li>
                                    <li>✅ Web integrator</li>
                                    <li>✅ Community manager with creative skills</li>
                                    <li>✅ Design and web entrepreneur</li>
                                    <li>✅ Versatile digital communication consultant</li>
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