import { Link } from 'react-router-dom';
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

export default function News4() {
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

                <span className="last-item font-medium text-gray-800 uppercase">
                    Real-life experiences thanks to our partnerships with the media
                </span>
            </nav>

            {/* Page Title */}
            <h1 className="page-title text-5xl font-bold mt-4 text-center">
                Real-life experiences thanks to our partnerships with the media
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
                    src="https://challengeconsulting.org/wp-content/uploads/2025/11/IMG_20210829_175046-768x1024.jpg"
                    alt="Featured Image"
                    className="w-full h-auto rounded-lg shadow-md mb-5"
                />
            </div>

            {/* Content */}
            <div className="entry-content mt-6 text-gray-700 leading-relaxed">

                <p className='text-xl'>
                    At CHALLENGE CONSULTING, audiovisual training goes far beyond theoretical courses.
                    We believe that to become a good professional, you need to experience the realities of the field.

                    That's why we repeatedly offer our students the opportunity to collaborate with our partners in the media. <br /> <br />

                    These experiences allow them to: <br />
                    🔹 Participate in real media coverage, <br />
                    🔹 Conduct interviews and reports, <br />
                    🔹 Observe real filming and production conditions, <br />
                    🔹 Develop their responsiveness and professionalism.<br /> <br />

                    📍 These practical immersions provide concrete preparation for the world of work, while strengthening the confidence and technical competence of our learners. <br /> <br />
                </p>
            </div>

            <CommentForm />
            <CommentsList />
        </div>
    );
}
