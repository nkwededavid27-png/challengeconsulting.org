import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import FloatingCard from "../components/Floating-card";

function SingleF() {
    const programs = [
        {
            title: "Graphic Design",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/1-CHALLENGE-GRAPHISME-DESIGN-2048x2048-1.jpg",
            link: "/Graphic-design",
        },
        {
            title: "Web and Mobile Development",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/9-DEVELOPPEMENT-WEB-1024x1024-3.jpg",
            link: "/Web-mobile-dev",
        },
        {
            title: "Application and Digital Solutions Development",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/10-DEVELOPPEMENT-DAPPLICATIONS-ET-SOLUTIONS-DIGITALES-1463x1536-1.jpg",
            link: "/App-digital-sol-dev",
        },
        {
            title: "Audiovisual Professions",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/11-METIERS-DE-LAUDIOVISUEL-1.jpg",
            link: "/Audiovisual-Professions",
        },
        {
            title: "Computer Maintenance",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/13-MAINTENANCE-INFORMATIQUE-1536x1533-1.jpg",
            link: "/Computer-Maintenance",
        },
        {
            title: "GSM Maintenance",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/16-MAINTENANCE-GSM-CELLULAIRE-768x767-1.jpg",
            link: "/GSM-Maintenance",
        },
        {
            title: "Video Surveillance",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/17-VIDEO-SURVEILLANCE-1536x1536-1.jpg",
            link: "/Video-Surveillance",
        },
        {
            title: "Traditional & Modern Screen Printing",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/18-SERIGRAPHIE-1024x1011-1.jpg",
            link: "/Traditional & Modern-Screen-Printing",
        },
        {
            title: "Data Entry Operation / Basic Computer Skills",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/19-OPERATION-DE-SAISIE-1024x1011-1.jpg",
            link: "/Data-Entry-Operation-Basic-Computer-Skills",
        },
        {
            title: "Secretarial and Office Automation",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/20-SECRETARIAT-BUREAUTIQUE-1024x1011-1.jpg",
            link: "/Secretarial-and-Office-Automation",
        },
        {
            title: "Accounting Secretariat",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/21-SECRETARIAT-COMPTABLE-1024x1011-1.jpg",
            link: "/Accounting-Secretariat",
        },
    ];
    return (
        <div className="pt-20">
            <div className="bg-[#000033] text-center p-15">
                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-7xl text-white font-bold">Single-discipline training programs</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-10">
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
                    to="/Multi"
                    className="flex items-center justify-center uppercase p-4 lg:text-2xl bg-[#ffcc00] font-bold rounded-4xl w-190"
                >
                    discover our multi-disciplinary training program
                    <ChevronRight className="w-10 h-10 ml-2" color="#0e0c06" />
                </Link>
            </div>

        </div>

    );
}

export default SingleF;