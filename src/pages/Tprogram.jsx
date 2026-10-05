import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingCard from "../components/Floating-card";


export default function Tprogram() {
    const [activeTab1, setActiveTab1] = useState("choice");
    const [activeTab2, setActiveTab2] = useState("choice");
    return (
        <div className="pt-20">
            <div className="relative m-10 rounded-4xl lg:h-160 overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-[url('https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-2_1_11zon-scaled.jpg')] bg-cover bg-center"
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 items-center">
                    <h1 className=" sm:text-2xl md:text-3xl lg:text-7xl text-center text-white font-bold w-full pt-50 pl-10 pr-10 pb-20">
                        Depuis 2008, CHALLENGE CONSULTING forme des jeunes qui transforment l'Afrique
                    </h1>
                    <div className="text-center m-10">
                        <a
                            href="https://wa.me/0161048342" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-center text-sm lg:text-2xl font-bold p-5 rounded-3xl bg-[#ffcc00]"
                        >
                            Rejoignez nous sur Whatsapp
                        </a>
                    </div>
                </div>
            </div>

            <FloatingCard />

            <div className="m-10 bg-[#000033] rounded-2xl">
                <p className="text-left p-10 text-white lg:text-3xl">À CHALLENGE CONSULTING, notre particularité réside dans l’offre combinée de formations monodisciplinaires et pluridisciplinaires, conçues pour maximiser les compétences de nos apprenants et renforcer leur efficacité professionnelle.</p>
            </div>
            {/* */}
            <div className="p-3 lg:p-10 rounded-3xl text-center bg-[#ffcc00] m-5 lg:m-10">
                <NavLink
                    to="/Single-f"
                    className="p-2 lg:p-7 font-bold text-black text-sm lg:text-2xl bg-white hover:bg-blue-100 rounded-3xl"
                >
                    Decouvrez les formations monodiciplinaires
                </NavLink>
            </div>

            <div className="w-full mt-10">
                {/* Tab Navigation */}
                <ul className="flex justify-center border-b border-gray-300">
                    <li>
                        <button
                            onClick={() => setActiveTab1("choice")}
                            className={`px-6 py-3 text-base font-semibold transition ${activeTab1 === "choice"
                                ? "bg-yellow-400 text-blue-950 rounded-t-lg"
                                : "hover:bg-blue-950 hover:text-white text-gray-700"
                                }`}
                        >
                            Pourquoi ce choix
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveTab1("advantages")}
                            className={`px-6 py-3 text-base font-semibold transition ${activeTab1 === "advantages"
                                ? "bg-yellow-400 text-blue-950 rounded-t-lg"
                                : "hover:bg-blue-950 hover:text-white text-gray-700"
                                }`}
                        >
                            Avantages
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
                                <p className="text-gray-800">
                                    Parce que la vraie valeur aujourd’hui réside dans l’expertise
                                    approfondie. Dans un marché de plus en plus concurrentiel, les
                                    spécialistes captent 60% des opportunités premium. Cette
                                    formation fait de vous la référence incontournable dans votre
                                    domaine.
                                </p>
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
                                    <li>✅Expertise reconnue qui vous place comme référence</li>
                                    <li>
                                        ✅Insertion professionnelle ciblée avec un réseau spécialisé
                                    </li>
                                    <li>✅Parcours intensif qui maximise votre apprentissage</li>
                                    <li>✅Débouchés directs vers des postes de spécialiste senior</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="p-3 lg:p-10 rounded-3xl text-center bg-[#ffcc00] m-5 lg:m-10">
                <NavLink
                    to="/Single-f"
                    className="p-2 lg:p-7 font-bold text-black text-sm lg:text-2xl bg-white hover:bg-blue-100 rounded-3xl"
                >
                    Discover multidisciplinary training programs
                </NavLink>
            </div>

            <div className="w-full mt-10">
                {/* Tab Navigation */}
                <ul className="flex justify-center border-b border-gray-300">
                    <li>
                        <button
                            onClick={() => setActiveTab2("choice")}
                            className={`px-6 py-3 text-base font-semibold transition ${activeTab2 === "choice"
                                ? "bg-yellow-400 text-blue-950 rounded-t-lg"
                                : "hover:bg-blue-950 hover:text-white text-gray-700"
                                }`}
                        >
                            Pourquoi ce choix
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveTab2("advantages")}
                            className={`px-6 py-3 text-base font-semibold transition ${activeTab2 === "advantages"
                                ? "bg-yellow-400 text-blue-950 rounded-t-lg"
                                : "hover:bg-blue-950 hover:text-white text-gray-700"
                                }`}
                        >
                            Avantages
                        </button>
                    </li>
                </ul>

                {/* Tab Content with Animation */}
                <div className="bg-white shadow-md rounded-b-lg p-6 w-87 sm:w-150 md:w-190 lg:w-250 m-auto border-2 border-black">
                    <AnimatePresence mode="wait">
                        {activeTab2 === "choice" && (
                            <motion.div
                                key="choice"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <p className="text-gray-800">
                                    Because the future belongs to hybrid profiles capable of bridging
                                    different professions. These skills position you as the architect of
                                    innovative solutions.
                                </p>
                            </motion.div>
                        )}

                        {activeTab2 === "advantages" && (
                            <motion.div
                                key="advantages"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>✅Mastery of the digital ecosystem in its entirety</li>
                                    <li>
                                        ✅Naturally positioned for strategic and management roles
                                    </li>
                                    <li>✅Ability to manage complex projects from start to finish</li>
                                    <li>✅Creating value through complementary skills</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:h-80 bg-[#ffcc00] m-5 sm:m-auto md:m-5 lg:m-10 mt-10 rounded-4xl">
                <div className="text-center ">
                    <h1 className="font-extrabold text-2xl p-12 text-left lg:w-180 lg:ml-10">First Graphic Design Examination Center in Benin</h1>
                    <p className="text-xl text-left lg:ml-20 lg:w-190 ml-5">
                        In accordance with Decision No.410/MESTFP/DC/SGM/DEC/STEC/SA of August 29,2019.
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
}