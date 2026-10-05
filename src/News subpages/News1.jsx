import { Link } from 'react-router-dom';
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

export default function News1() {
  
  
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
            className="text-[#ffcc00] hover:text-[#000033]"
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

        <span className="last-item font-medium text-gray-800 ">
          CHALLENGE CONSULTING: Pioneer and key player in professional examinations in Graphic Design in Benin
        </span>
      </nav>

      {/* Page Title */}
      <h1 className="page-title text-5xl font-bold mt-4 text-center">
        CHALLENGE CONSULTING: Pioneer and key player in professional examinations in Graphic Design in Benin
      </h1>

      {/* Meta Info */}
      <ul className="entry-meta flex items-center text-sm text-gray-500 space-x-4 mt-3">
        <li className="meta-date">
          <time dateTime="2025-11-25T10:44:14+01:00">November 25, 2025</time>
        </li>
      </ul>

      {/* Featured Image */}
      <div className="entry-image mt-6">
        <img
          src="https://challengeconsulting.org/wp-content/uploads/2025/11/7-1.jpg"
          alt="Featured Image"
          className="w-full h-auto rounded-lg shadow-md mb-5"
        />
      </div>

      {/* Content */}
      <div className="entry-content mt-6 text-gray-700 leading-relaxed">
        <h3 className="mb-6 font-bold text-xl">
          A reference center since 2018
        </h3>

        <p className='text-2xl'>
          Since 2018, CHALLENGE CONSULTING has distinguished itself by becoming the very first center in Benin officially recognized as an examination center in Graphic Design.
          This national recognition marked a turning point in the field of graphic and digital training, placing our center at the forefront of the professionalization of visual design professions. <br /> <br />

          An experience that inspires other centers <br /> <br />

          Over the years, several other training centers have also joined the movement initiated by CHALLENGE CONSULTING, presenting their students for professional exams.
          This positive development demonstrates the impact of our model and CHALLENGE CONSULTING's major contribution to the development of the graphic design sector in Benin.<br /> <br />

          Leadership recognized by the authorities <br /> <br />

          For several consecutive years, the Director General, Mr. Wilfried G. AZIMBLIGBO, was appointed by the relevant authorities to launch and oversee the professional examinations in Graphic Design.
          This mission, carried out alongside the Deputy Mayor, Head of the 3rd arrondissement of Cotonou, demonstrates the trust and institutional respect accorded to our center. <br /> <br />

          A constant commitment to quality and excellence<br /> <br />

          True to its vision, CHALLENGE CONSULTING continues to provide rigorous and comprehensive training, blending creativity, technical skills, and professionalism.
          Our ambition remains the same: to train the best talent in Graphic Design and Visual Arts in Benin and Africa.
        </p>
      </div>

      <CommentForm />
      <CommentsList />
    </div>
  );
}
