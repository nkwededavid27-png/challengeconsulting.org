import { Link } from 'react-router-dom';
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

export default function News2() {
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
                    CHALLENGE CONSULTING, a national pride in the field of Graphic Design and the Arts!
                </span>
            </nav>

            {/* Page Title */}
            <h1 className="page-title text-5xl font-bold mt-4 text-center">
                CHALLENGE CONSULTING, a national pride in the field of Graphic Design and the Arts!
            </h1>

            {/* Meta Info */}
            <ul className="entry-meta flex items-center text-sm text-gray-500 space-x-4 mt-3">
                <li className="meta-date">
                    <time dateTime="2025-11-25T10:44:14+01:00">November 22, 2025</time>
                </li>
            </ul>

            {/* Featured Image */}
            <div className="entry-image mt-6">
                <img
                    src="https://challengeconsulting.org/wp-content/uploads/2025/11/CHALLENGE-1.jpg"
                    alt="Featured Image"
                    className="w-full h-auto rounded-lg shadow-md mb-5"
                />
            </div>

            {/* Content */}
            <div className="entry-content mt-6 text-gray-700 leading-relaxed">

                <p className='text-xl'>
                    Since 2018, CHALLENGE CONSULTING has been proud to be the very first center in Benin officially recognized as an examination center in Art and Graphic Design.
                    This national recognition testifies to our expertise, our rigorous teaching methods, and the quality of our supervision. <br /> <br />

                    This distinction makes CHALLENGE CONSULTING a leading player in training the creative professionals, graphic designers, and visual artists of tomorrow.
                    Our students take their exams in a professional, well-equipped environment that meets the requirements of the Ministry of Technical Education and Vocational Training. <br /> <br />

                    🎨 At CHALLENGE CONSULTING, we don't just train learners…
                    We train the future talents of design in Benin and Africa.<br /> <br />

                    📍 CHALLENGE CONSULTING – A benchmark for over 15 years. <br /> <br />
                </p>
            </div>

            <CommentForm />
            <CommentsList />
        </div>
    );
}
