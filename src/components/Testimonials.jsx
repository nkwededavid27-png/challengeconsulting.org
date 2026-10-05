import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <div className="m-5 bg-gray-100 h-240  md:h-200 p-5 rounded-3xl">
            <h1 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl pt-10 pb-10 font-bold text-[#000033] ">They took up the challenge with CHALLENGE CONSULTING</h1>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="m-10"
            >
                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            CHALLENGE CONSULTING is a training centre that has four major fields which are computer training, serigraphy, audiovisual and graphism and its teachers and facilitators are very welcoming, respectful and kind. I had a great time learning with CHALLENGE CONSULTING and I think they did too
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/736x/f3/7a/7e/f37a7e799e8c45c7e0a8bc300615a10b.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">Philip Samuel</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            My name is Phoebe Houngbo. I am currently completing a five-month training program at Challenge Consulting, where I have acquired skills in office administration, graphic design, screen printing (modern and traditional), and video editing.
                            Office Administration
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/736x/65/01/12/6501126448d271899760aece4cefb600.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">Catherine Savou</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            Catherine SAVOU. Since the start of my training in October 2024, I have developed technical skills and a rigorous work ethic. Through projects and practical exercises, I have transformed my theoretical knowledge into problem-solving abilities.

                            I. Office Skills
                            II am proficient in the main office software. With Word, I write and format documents, letters, resumes, and reports; insert tables and images; create automatic tables of contents; and number pages. With Excel, I build tables, perform automatic calculations, and create charts to manage data. With PowerPoint, I design clear and visual presentations. With Publisher, I create posters, flyers, business cards, and brochures, organizing text and images attractively. I also know how to print, laminate, and bind documents.
                            
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/736x/7d/c3/d7/7dc3d7d72633e567ce5dbd1d5c434af3.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">Adjo SAVOU</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            Your training center in IT, screen printing, graphic design, and audiovisual production at CHALLENGE CONSULTING is particularly renowned for its excellence and the quality of the skills it imparts—a reputation that perfectly aligns with my aspirations.

                            I am convinced that the skills I will acquire with you will be a major asset in helping me achieve my professional goals and will also be a decisive factor in my future career. Thank you so much, and may God make things even easier for you. We're in this together.
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/1200x/3f/1f/6a/3f1f6a9006a7000f7189d029ebc7fca6.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">Faosyath AGNINDÉ</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            This is ADJIDJA Eunice. I'm currently training in Screen Printing, Graphic Design, and Office Administration, which I started last May. I find the working conditions very satisfactory: the lessons are well explained, and each student has their own computer.
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/1200x/cc/94/96/cc949673bdfbae1257f9a8323efcab6b.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">E ni</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            I am currently training in office administration at Challenge Consulting and I am very satisfied with my experience. The training is well-structured, practical, and adapted to the realities of the professional world.

                            I have been able to improve my skills in office administration, organizational skills, and professional communication. Challenge Consulting offers a serious and motivating environment, which fosters learning and self-confidence. I highly recommend this center to anyone wishing to train effectively in secretarial and administrative skills.
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/736x/a3/cf/37/a3cf37b2ac635b28181a54a8f3f0558b.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">dorie guede</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            I'm very satisfied with my training in Graphic Design, Screen Printing, Video Editing, Surveillance, and GSM/Cellular Maintenance at their training center.

                            Without a doubt, they are a leading provider of professional training in audiovisual IT, graphic design, and screen printing in Cotonou.

                            Yes, I had the opportunity to observe other students in different disciplines. Everyone there unanimously noticed the seriousness and professionalism demonstrated by the staff.
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/1200x/4d/3a/2f/4d3a2f1b30a51690c24cf3085c310148.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">Catherine Goumenou</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            I'm very satisfied with my training in graphic design, office administration, and web development at their training center.

                            Without a doubt, they are a leading institution in Cotonou for professional training in audiovisual technology, graphic design, and screen printing.F
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/1200x/d8/19/8f/d8198f9a2201d781def4d0fbb6227a19.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">Danielle Djekinnou</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-2xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            Excellent IT training center.
                            With an ideal setting and instructors dedicated to those eager to learn.
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/1200x/f1/97/90/f197904eba4a1f10fe4067d39dc8f0de.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">Giovani GBEMENOU</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="shadow-md shadow-[#ffcc00] rounded-3xl bg-white">
                    <div className="bg-white p-5 shadow-md shadow-[#ffcc00] rounded-3xl">
                        <p className="text-left">⭐⭐⭐⭐⭐</p>
                        <p className="text-left mt-2">
                            I had the opportunity to train at the Computer Training Center, and I can attest to their ability to clearly demonstrate and explain the course material. The instructors were understanding, patient, and always available, helping their students quickly grasp how the software works. They were also very well-organized. The best part is that the more experienced students treat new ones like family and are always ready to help whenever needed. 🙏🙏🙏 Thanks to them, I quickly became proficient in software like Word, Excel, PowerPoint, and more.
                        </p>
                        <div className="flex gap-5 mt-10">
                            <img className='w-15 h-15 rounded-4xl object-cover' src="https://i.pinimg.com/736x/78/1a/9b/781a9b325af83f3ee34c4adafc01d088.jpg" alt="" />
                            <h2 className="text-center mt-4 font-bold text-xl">Elohim Biova</h2>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Add more SwiperSlide items here */}

            </Swiper>

            <div className="text-center">
                <button className="text-white text-center bg-[#ffcc00] p-5 w-60 sm:w-80 lg:w-100 text-sm sm:text-xl md:text-3xl lg:text-2xl font-bold rounded-3xl">+ 100 Verified Google Reviews</button>
            </div>

        </div>
    );
};

export default Testimonials;
