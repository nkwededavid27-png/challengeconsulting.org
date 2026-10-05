import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import FloatingCard from "../components/Floating-card";


export default function MultiF() {
    const programs = [
        {
            title: "Graphic Design + 3D Modeling",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/2-DESIGN-GRAPHIQUE-MODELISATION-3D-1.jpg",
            link: "/Graphic-Design-3D-Modeling",
        },
        {
            title: "Graphic Design + Digital Communication",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/3-GRAPHISME-DESIGN-COMMUNICATION-DIGITALE-1024x1011-2.jpg",
            link: "/Graphic-Design-Digital-Communication",
        },
        {
            title: "Graphic Design + Communication & Multimedia",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/4-GRAPHISME-DESIGN-COMMUNICATION-MULTIMEDIA-1024x1024-2.jpg",
            link: "/Graphic-Design-Communication-Multimedia",
        },
        {
            title: "Graphic Design + Traditional and Modern Screen Printing",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/5-GRAPHISME-DESIGN-SERIGRAPHIE-1024x1011-3.jpg",
            link: "/Graphic-Design-Traditional-and-Modern-Screen-Printing",
        },
        {
            title: "Graphic Design + Office Administration",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/6-GRAPHISME-DESIGN-SECRETARIAT-BUREAUTIQUE-1024x1011-2.jpg",
            link: "/Graphic-Design-Office-Administration",
        },
        {
            title: "Graphic Design + Screen Printing + Secretarial Services",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/7-GRAPHISME-DESIGN-SERIGRAPHIE-SECRETARIAT-BUREAUTIQUE-1317x1536-2.jpg",
            link: "/Graphic-Design-Screen-Printing-Secretarial-Services",
        },
        {
            title: "Graphic Design + Web Development",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/8-GRAPHISME-DESIGN-DEVELOPPEMENT-WEB-1024x1024-2-768x768.jpg",
            link: "/Graphic-Design-Web-Development",
        },
        {
            title: "Audiovisual + Infographics",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/12-AUDIOVISUEL-INFOGRAPHIE-1.jpg",
            link: "/Audiovisual-Infographics",
        },
        {
            title: "Computer Maintenance Technician + Computer Networks + Electronics",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/14-MAINTENANCE-RESEAU-INFORMATIQUE-ELECTRONIQUE-1024x1024-1.jpg",
            link: "/Computer-Maintenance-Technician-Computer-Networks-Electronics",
        },
        {
            title: "Computer Maintenance Technician + Computer Networks + Cell Phones",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/15-MAINTENANCE-RESEAU-INFORMATIQUE-GSM-1024x1024-1.jpg",
            link: "/Computer-Maintenance-Technician-Computer-Networks-Cell-Phones",
        },
    ];
    return (
        <div className="pt-20">
            <div className="bg-[#000033] text-center p-15">
                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-7xl text-white font-bold">Multidisciplinary training programs</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 pt-10">
                {programs.map((program, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl shadow-lg overflow-hidden text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <Link to={program.link}>
                            <img
                                src={program.img}
                                alt={program.title}
                                className="w-full h-64 object-cover"
                            />
                            
                        </Link>
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">{program.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <FloatingCard />

            <div className="bg-amber-100 w-full p-10 flex justify-center">
                <Link
                    to="/Single"
                    className="flex items-center justify-center uppercase p-4 lg:text-2xl bg-[#ffcc00] font-bold rounded-4xl w-190"
                >
                    <ChevronLeft className="w-10 h-10 ml-2" color="#0e0c06" />
                    discover our Single-Discipline training program
                </Link>
            </div>
        </div>
    );
}