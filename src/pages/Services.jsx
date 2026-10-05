import { useState } from "react";
import FloatingCard from "../components/Floating-card";

export default function Services() {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            title: "Computer science",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <img
                        src="https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20220214_095835-20251121-213306.jpg"
                        alt='computer science'
                        className="w-150 h-auto object-cover"
                    />
                    <ul className="list-disc list-inside space-y-2 text-white font-bold m-auto">
                        <li>✅Executive assistance</li>
                        <li>✅Document entry</li>
                        <li>✅Document scanning</li>
                        <li>✅Document binding</li>
                        <li>✅Printing</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 2,
            title: "Audio-visual",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <img
                        src="https://challengeconsulting.org/wp-content/uploads/2025/11/IMG-20210624-WA0021_1_4_11zon.jpg"
                        alt='computer science'
                        className="w-150 h-auto object-cover"
                    />
                    <ul className="list-disc list-inside space-y-2 text-white font-bold m-auto">
                        <li>✅Professional Video Shooting</li>
                        <li>✅Video Editing and Audio Processing</li>
                        <li>✅Commercials and Promotional Videos</li>
                        <li>✅Event Recording (conferences, ceremonies, training)</li>
                        <li>✅Video Interviews and Testimonials</li>
                        <li>✅Documentaries and Reports</li>
                        <li>✅Motion Design and Video Animation</li>
                        <li>✅Creating Video Intros and Outros</li>
                        <li>✅Video Clips for Social Media</li>
                        <li>✅Professional Photography Services</li>
                        <li>✅Production of Educational Videos</li>
                        <li>✅Editing YouTube Videos and Web Content</li>
                        <li>✅Teasers and Video Announcements</li>
                        <li>✅Video Branding (titles, transitions, lower thirds)</li>
                    </ul>
                </div>

            ),
        },
        {
            id: 3,
            title: "Graphic design",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <img
                        src="https://challengeconsulting.org/wp-content/uploads/2025/11/PUB-CHALLENGE-panneau_12_m2.jpg"
                        alt='computer science'
                        className="w-150 h-auto object-cover"
                    />

                    <ul className="list-disc list-inside space-y-2 text-white font-bold m-auto">
                        <li>✅Professional Logo Design</li>
                        <li>✅Complete Visual Identity</li>
                        <li>✅Flyers and Advertising Posters</li>
                        <li>✅Business Card Design</li>
                        <li>✅Social Media Banners and Visuals</li>
                        <li>✅Mock-ups and Brochures</li>
                        <li>✅Catalogues and Journals</li>
                        <li>✅Restaurant Menus</li>
                        <li>✅Administrative Document Layout</li>
                        <li>✅Certificates and Attestations</li>
                        <li>✅Mini-Branding for SMEs</li>
                        <li>✅Visuals for Videos and Thumbnails</li>
                        <li>✅Screen Printing Designs</li>
                        <li>✅Professional Photo Retouching</li>
                    </ul>
                </div>

            ),
        },
        {
            id: 4,
            title: "Traditional and Modern Screen Printing",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <img
                        src="https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20220721_163132-min.jpg"
                        alt='computer science'
                        className="w-150 h-auto object-cover"
                    />

                    <ul className="list-disc list-inside space-y-2 text-white font-bold m-auto">
                        <li>✅Screen printing on T-shirts</li>
                        <li>✅Screen printing on polo shirts and shirts</li>
                        <li>✅Branding on Caps and Beanies</li>
                        <li>✅Printing on Tote Bags and Bags</li>
                        <li>✅Sports Jerseys and Uniforms</li>
                        <li>✅Vinyl Printing (Flockage & Flex)</li>
                        <li>✅Advertising Banners and Posters</li>
                        <li>✅Multilayer and CMYK Printing</li>
                        <li>✅Vectorization of Visuals</li>
                        <li>✅Creation of Films and Typons</li>
                        <li>✅Screen Printing Workshops</li>
                        <li>✅Small and Large Series Printing</li>
                        <li>✅Event T-shirt Designs</li>
                    </ul>
                </div>

            ),
        },
        {
            id: 5,
            title: "Web development and digital solutions",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <img
                        src="https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20250320_131436_326-min-scaled.jpg"
                        alt='computer science'
                        className="w-150 h-auto object-cover"
                    />

                    <ul className="list-disc list-inside space-y-2 text-white font-bold m-auto">
                        <li>✅Website Creation (Showcase, Professional, E-commerce)</li>
                        <li>✅Custom Web Applications</li>
                        <li>✅Responsive Design Optimization</li>
                        <li>✅Website Maintenance and Updates</li>
                        <li>✅Mobile App Development</li>
                        <li>✅Online Payment Integration</li>
                        <li>✅Digitalization Solutions</li>
                        <li>✅E-learning Platforms</li>
                        <li>✅Data Management and Security</li>
                        <li>✅Workflow Automation</li>
                        <li>✅Landing Pages for Marketing</li>
                    </ul>
                </div>

            ),
        },
        {
            id: 6,
            title: "Computer Maintenance and Networks",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <img
                        src="https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20221020_130754_4_11zon.jpg"
                        alt='computer science'
                        className="w-150 h-auto object-cover"
                    />

                    <ul className="list-disc list-inside space-y-2 text-white font-bold m-auto">
                        <li>✅Diagnostics and Troubleshooting</li>
                        <li>✅Preventive and Corrective Maintenance</li>
                        <li>✅Windows Installation and Configuration</li>
                        <li>✅Optimization and Speed-up</li>
                        <li>✅Hardware Repairs</li>
                        <li>✅Data Recovery and Backup</li>
                        <li>✅LAN/Wi-Fi Network Setup</li>
                        <li>✅Router Configuration</li>
                        <li>✅Network Security</li>
                        <li>✅Software and Antivirus Installation</li>
                        <li>✅Computer Assembly</li>
                        <li>✅IT Audits</li>
                        <li>✅Enterprise Maintenance Contracts</li>
                    </ul>
                </div>

            ),
        },
        {
            id: 7,
            title: "Video Surveillance System",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <img
                        src="https://challengeconsulting.org/wp-content/uploads/2025/11/Gemini_Generated_Image_4k4iw84k4iw84k4i.png"
                        alt='computer science'
                        className="w-150 h-auto object-cover"
                    />

                    <ul className="list-disc list-inside space-y-2 text-white font-bold m-auto">
                        <li>✅Installation and Maintenance of CCTV Systems</li>
                        <li>✅Configuration of Surveillance Networks</li>
                        <li>✅Monitoring and Security Solutions</li>
                    </ul>
                </div>

            ),
        },
        {
            id: 8,
            title: "GSM Cellular Maintenance - Electronics",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <img
                        src="https://challengeconsulting.org/wp-content/uploads/2025/11/Gemini_Generated_Image_46tj3246tj3246tj.png"
                        alt='computer science'
                        className="w-150 h-auto object-cover"
                    />

                    <ul className="list-disc list-inside space-y-2 text-white font-bold m-auto">
                        <li>✅Phone Diagnostics and Repairs</li>
                        <li>✅Screen Replacement</li>
                        <li>✅Battery and Component Replacement</li>
                        <li>✅Motherboard Repairs (Microsoldering)</li>
                        <li>✅System Restoration and Updates</li>
                        <li>✅Unlocking and Resetting</li>
                        <li>✅Port Repairs (Charging, SIM, Audio)</li>
                        <li>✅Smartphone Optimization</li>
                        <li>✅Data Recovery</li>
                        <li>✅Camera and Sensor Replacement</li>
                        <li>✅Speaker and Microphone Repairs</li>
                        <li>✅Connector Soldering</li>
                        <li>✅Quality Testing</li>
                    </ul>
                </div>

            ),
        },
    ];
    return (
        <div className="pt-20">
            <div className="relative m-10 rounded-4xl lg:h-160 overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-[url('https://challengeconsulting.org/wp-content/uploads/2025/11/PUB-CHALLENGE-panneau-16-08-2022.jpg')] bg-cover bg-center"
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 items-center">
                    <h1 className=" sm:text-2xl md:text-3xl lg:text-7xl text-center text-white font-bold w-full pt-50 pl-10 pr-10 pb-20">
                        Notre expertise à notre service !
                    </h1>
                    <div className="text-center m-10">
                        <a
                            href="https://wa.me/0161048342" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-center text-sm lg:text-2xl font-bold p-3 rounded-3xl bg-[#ffcc00]"
                        >
                            Rejoignez nous sur Whatsapp
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full  mx-auto mt-10 bg-gray-200 p-10 rounded-3xl">
                {/* Tab Navigation */}
                <ul className="flex flex-wrap justify-center border-b border-gray-300 gap-4">
                    {tabs.map((tab) => (
                        <li key={tab.id}>
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 text-xl rounded-2xl bg-white font-semibold transition ${activeTab === tab.id
                                    ? "bg-yellow-400 text-blue-950 rounded-2xl"
                                    : "hover:bg-blue-950 hover:text-white text-gray-700"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Tab Content */}
                <div className=" shadow-md rounded-b-lg p-6 bg-[#000033] mt-10">
                    {tabs.find((tab) => tab.id === activeTab)?.content}
                </div>
            </div>

            <FloatingCard />

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
}