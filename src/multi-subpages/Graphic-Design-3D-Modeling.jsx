import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GraphicDesign3DModeling() {
    const title = 'Graphic Design + 3D Modeling'
    const [activeTab1, setActiveTab1] = useState("choice");
    return (
        <div className="pt-20">
            <div className="w-full text-center p-10 bg-[#ffcc00]">
                <h1 className="text-center text-3xl text-black font-bold">{title}</h1>
            </div>

            <div className="w-full mt-10">
                <img
                    src="https://challengeconsulting.org/wp-content/uploads/2025/11/2-DESIGN-GRAPHIQUE-MODELISATION-3D-1-1463x1536.jpg"
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
                                    <li><span className="text-base">1️⃣</span> Introduction to graphic design and principles of visual communication</li>
                                    <li><span className="text-base">2️⃣</span> Proficiency in leading software: Photoshop, Illustrator, InDesign</li>
                                    <li><span className="text-base">3️⃣</span> Creation of visual identities (logos, style guides, posters, flyers, etc.)</li>
                                    <li><span className="text-base">4️⃣</span> Design of professional multimedia and advertising materials</li>
                                    <li><span className="text-base">5️⃣</span> UX/UI design principles applied to modern graphic design</li>
                                    <li><span className="text-base">6️⃣</span> Introduction to 3D modeling with Adobe Dimension</li>
                                    <li><span className="text-base">7️⃣</span> Advanced modeling and realistic rendering with Blender</li>
                                    <li><span className="text-base">8️⃣</span> Integration of 2D and 3D design into creative projects</li>
                                    <li><span className="text-base">9️⃣</span> Creation of attractive professional portfolios</li>
                                    <li><span className="text-base">🔟</span> Completion of concrete, market-oriented projects</li>
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
                                    <li>✅ Freelance graphic designer or agency-based</li>
                                    <li>✅ Graphic designer and layout artist for media, press and digital communication</li>
                                    <li>✅ Specialist in visual advertising and corporate branding</li>
                                    <li>✅ 3D designer for products, architecture and animation</li>
                                    <li>✅ Visual and multimedia communication consultant</li>
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