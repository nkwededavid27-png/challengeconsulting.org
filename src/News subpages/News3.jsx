import { Link } from 'react-router-dom';
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

export default function News3() {
    return (
        <div className="entry-header max-w-3xl mx-auto p-6 pt-23 ">
            {/* Breadcrumbs */}
            <nav
                className="ct-breadcrumbs flex items-center text-sm text-gray-600 space-x-2"
                aria-label="Breadcrumb"
            >
                <span className="first-item flex items-center">
                    <Link
                        to="/News"
                        className="hover:text-[#000033] text-[#ffcc00] font-semibold"
                    >
                        News
                    </Link>
                    <svg
                        className="ct-separator mx-2"
                        fill="currentColor"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        aria-hidden="true"
                    >
                        <path d="M2,6.9L4.8,4L2,1.1L2.6,0l4,4l-4,4L2,6.9z"></path>
                    </svg>
                </span>

                <span className="last-item font-medium text-gray-800">
                    Screen printing at CHALLENGE CONSULTING: learning through hands-on experience, for the real market
                </span>
            </nav>

            {/* Page Title */}
            <h1 className="page-title text-5xl font-bold mt-4 text-center">
                Screen printing at CHALLENGE CONSULTING: learning through hands-on experience, for the real market
            </h1>

            {/* Meta Info */}
            <ul className="entry-meta flex items-center text-sm text-gray-500 space-x-4 mt-3">
                <li className="meta-date">
                    <time dateTime="2025-11-25T10:44:14+01:00">November 21, 2025</time>
                </li>
            </ul>

            {/* Featured Image */}
            <div className="entry-image mt-6">
                <img
                    src="https://challengeconsulting.org/wp-content/uploads/2025/11/20240905_104626-min-768x1024.jpg"
                    alt="Featured Image"
                    className="w-full h-auto rounded-lg shadow-md mb-5"
                />
            </div>

            {/* Content */}
            <div className="entry-content mt-6 text-gray-700 leading-relaxed">

                <p className='text-xl'>
                    At CHALLENGE CONSULTING, screen printing training is based on a 100% practical and career-oriented approach.
                    Thanks to the trust of several partner schools, companies, and organizations, our center regularly receives real production orders. <br /> <br />

                    These partnerships allow our learners to: <br />
                    🔹 Work on real market projects,<br />
                    🔹 Discover the quality and time requirements specific to the professional world,<br />
                    🔹 Develop mastery of modern screen printing techniques,<br />
                    🔹 And above all, acquire concrete and valuable experience. <br /> <br />

                    Thus, our learners do not limit themselves to learning theory — they produce, experiment and become professionals through contact with real-world situations.<br /> <br />
                </p>
            </div>

            <CommentForm />
            <CommentsList />
        </div>
    );
}
