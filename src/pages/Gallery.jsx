import { Link } from "react-router-dom";
import FloatingCard from "../components/Floating-card";

export default function Gallery() {
    const programs = [
        {
            title: "Graphic Design",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/GRAHISME-8_7_11zon-1152x1536.jpg",
            link: "/Graphic-design-G",
        },
        {
            title: "Web and Mobile Development",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/DEV-WEB-5_5_11zon-1542x2048.jpg",
            link: "/Web-development",
        },
        {
            title: "Audio-visual",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/AUDI-VISUEL-1-1-1-1157x1536.jpg",
            link: "/Audio-visual",
        },
        {
            title: "Computer Maintenance",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/Reseaux-4.jpg",
            link: "/Computer-Maintenance-G",
        },
        {
            title: "GSM Cellular Maintenance - Electronics",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_4563_4_11zon-1152x1536.jpeg",
            link: "/GSM-Cellular",
        },
        {
            title: "Video Surveillance",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_4777-min-scaled.jpeg",
            link: "/Video-Surveillance-G",
        },
        {
            title: "Traditional & Modern Screen Printing",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/SERIGRAPHIE-5_5_11zon-scaled.jpg",
            link: "/Screen-printing",
        },
        {
            title: "Computer science",
            img: "https://challengeconsulting.org/wp-content/uploads/2025/11/FORMATION-INFORMATIQUE-3-1542x2048.jpg",
            link: "/Computer-science",
        },
    ];
    return (
        <div className="pt-20">
            <div className="bg-[#000033] text-center p-15">
                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-7xl text-white font-bold">Explore our world in pictures</h1>
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
                                className="w-full h-150 object-cover transition duration-300 hover:brightness-75"
                            />
                        </Link>
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">{program.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <FloatingCard />
        </div>
    );
}