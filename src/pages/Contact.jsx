import { useState } from "react";
import emailjs from "emailjs-com";

import { motion } from "framer-motion";
import FloatingCard from "../components/Floating-card";


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "",
        phone: "",
        message: "",
        to_email: "Wilfriedazimbligbo@yahoo.fr",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fullPhone = `${formData.countryCode}${formData.phone}`;

        emailjs
            .send(
                "service_fbaxvui",
                "template_ybvi00q",
                {
                    name: formData.name,
                    email: formData.email,
                    countryCode: formData.countryCode,
                    phone: fullPhone,
                    message: formData.message,
                },
                "WSHKRW0y-Zokz6zni"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSuccessMessage("✅ Email sent successfully!");
                    setErrorMessage("");
                    setFormData({ name: "", email: "", countryCode: "", phone: "", message: "", to_email: formData.to_email });
                    setTimeout(() => setSuccessMessage(""), 3000); // auto-hide after 3s
                },
                (err) => {
                    console.error("FAILED...", err);
                    setErrorMessage("❌ Failed to send message. Try again.");
                    setSuccessMessage("");
                }
            );
    };

    return (
        <div className="pt-25 sm:pt-20 md:pt-20 lg:pt-20">
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 lg:h-80 bg-[#000033] m-5 lg:m-10 rounded-4xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left Text Block */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h1 className="font-extrabold text-2xl lg:text-5xl lg:p-8 text-white lg:text-left lg:w-180 lg:ml-10">
                        CHALLENGE CONSULTING
                    </h1>
                    <p className="text-white text-left lg:ml-20 lg:w-190 lg:text-4xl text-lg ml-5">
                        vous reçoit dès <br /> Aujourd’hui pour bâtir votre avenir
                        Professionnel de demain !!!
                    </p>
                </motion.div>

                {/* Right Button Block */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button className="btn rounded-2xl bg-[#ffcc33] mt-5 mb-5 lg:mt-20 pt-8 pb-8 px-13 font-bold text-xl">
                        <a href="https://wa.me/0161048342" target="_blank" rel="noopener noreferrer">
                            Join us via WhatsApp
                        </a>
                    </button>
                </motion.div>
            </motion.div>


            <FloatingCard />

            <div className="m-10 border-double border-5 border-black bg-white rounded-4xl p-10">
                <p className="text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    Votre expérience professionnelle se construit dès l'inscription : Une formation professionnelle à la hauteur de vos ambitions.
                </p>
            </div>

            <div className="align-middle bg-[#ffcc33] m-10">
                <h1 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl p-10 font-bold">Les conditions d'inscriptions</h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
                    <div className="bg-white rounded-box p-2">
                        <h1 className="text-center p-2 text-2xl font-bold">Niveau requis</h1>

                        <p className="text-center p-2 text-xl font-serif">Etre titulaire au minimum du niveau 3ème.</p>
                    </div>

                    <div className="bg-white rounded-box p-2">
                        <h1 className="text-center p-2 text-2xl font-bold">Documents à fournir</h1>

                        <p className="text-center p-2 text-xl font-serif">Photocopie d'un acte de naissance sécurisé, d'une carte d'identité ou d'une carte CIP.</p>
                    </div>

                    <div className="bg-white rounded-box p-2">
                        <h1 className="text-center p-2 text-2xl font-bold">Formalités administratives</h1>

                        <p className="text-center p-2 text-xl font-serif">Remplir et signer le contrat de formation et la fiche d'engagement.</p>
                    </div>

                    <div className="bg-white rounded-box p-2">
                        <h1 className="text-center p-2 text-2xl font-bold">Frais d'inscription</h1>

                        <p className="text-center p-2 text-xl font-serif">10 000 FCFA (donnant droit à 2 tenues pour les formations dont la durée est ≥ 3 mois).</p>
                    </div>

                    <div className="bg-white rounded-box p-2">
                        <h1 className="text-center p-2 text-2xl font-bold">Modalités de paiement</h1>

                        <p className="text-center p-2 text-xl font-serif">1ère tranche à payer avant le début de la formation. L'intégralité des frais à solder progressivement au plus tard à la moitié de la durée totale.</p>
                    </div>

                    <div className="bg-white rounded-box p-2">
                        <h1 className="text-center p-2 text-2xl font-bold">Flexibilités offertes</h1>

                        <p className="text-center p-2 text-xl font-serif">Cours disponibles : jour, soir, accélérés. Équipements personnels parfois requis (à vérifier selon la formation).</p>
                    </div>

                </div>
            </div>



            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    I am starting my professional experience
                </h2>

                <form onSubmit={handleSubmit} >
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Phone with Country Code */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone</label>
                        <div className="flex space-x-2">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-2 py-2 focus:ring-2 focus:ring-blue-500 w-28"
                            >
                                <option value="+1">🇺🇸 United States (+1)</option>
                                <option value="+7">🇷🇺 Russia (+7)</option>
                                <option value="+20">🇪🇬 Egypt (+20)</option>
                                <option value="+27">🇿🇦 South Africa (+27)</option>
                                <option value="+33">🇫🇷 France (+33)</option>
                                <option value="+34">🇪🇸 Spain (+34)</option>
                                <option value="+39">🇮🇹 Italy (+39)</option>
                                <option value="+44">🇬🇧 United Kingdom (+44)</option>
                                <option value="+49">🇩🇪 Germany (+49)</option>
                                <option value="+55">🇧🇷 Brazil (+55)</option>
                                <option value="+61">🇦🇺 Australia (+61)</option>
                                <option value="+62">🇮🇩 Indonesia (+62)</option>
                                <option value="+63">🇵🇭 Philippines (+63)</option>
                                <option value="+81">🇯🇵 Japan (+81)</option>
                                <option value="+82">🇰🇷 South Korea (+82)</option>
                                <option value="+86">🇨🇳 China (+86)</option>
                                <option value="+91">🇮🇳 India (+91)</option>
                                <option value="+92">🇵🇰 Pakistan (+92)</option>
                                <option value="+964">🇮🇶 Iraq (+964)</option>
                                <option value="+970">🇵🇸 Palestine (+970)</option>
                                <option value="+972">🇮🇱 Israel (+972)</option>
                                <option value="+211">🇸🇸 South Sudan (+211)</option>
                                <option value="+212">🇲🇦 Morocco (+212)</option>
                                <option value="+213">🇩🇿 Algeria (+213)</option>
                                <option value="+216">🇹🇳 Tunisia (+216)</option>
                                <option value="+218">🇱🇾 Libya (+218)</option>
                                <option value="+222">🇲🇷 Mauritania (+222)</option>
                                <option value="+223">🇲🇱 Mali (+223)</option>
                                <option value="+224">🇬🇳 Guinea (+224)</option>
                                <option value="+225">🇨🇮 Côte d'Ivoire (+225)</option>
                                <option value="+226">🇧🇫 Burkina Faso (+226)</option>
                                <option value="+227">🇳🇪 Niger (+227)</option>
                                <option value="+228">🇹🇬 Togo (+228)</option>
                                <option value="+229">🇧🇯 Benin (+229)</option>
                                <option value="+230">🇲🇺 Mauritius (+230)</option>
                                <option value="+231">🇱🇷 Liberia (+231)</option>
                                <option value="+232">🇸🇱 Sierra Leone (+232)</option>
                                <option value="+233">🇬🇭 Ghana (+233)</option>
                                <option value="+234">🇳🇬 Nigeria (+234)</option>
                                <option value="+235">🇹🇩 Chad (+235)</option>
                                <option value="+236">🇨🇫 Central African Republic (+236)</option>
                                <option value="+237">🇨🇲 Cameroon (+237)</option>
                                <option value="+238">🇨🇻 Cabo Verde (+238)</option>
                                <option value="+239">🇸🇹 São Tomé & Príncipe (+239)</option>
                                <option value="+240">🇬🇶 Equatorial Guinea (+240)</option>
                                <option value="+241">🇬🇦 Gabon (+241)</option>
                                <option value="+242">🇨🇬 Republic of the Congo (+242)</option>
                                <option value="+243">🇨🇩 DR Congo (+243)</option>
                                <option value="+244">🇦🇴 Angola (+244)</option>
                                <option value="+245">🇬🇼 Guinea-Bissau (+245)</option>
                                <option value="+246">🇸🇭 Saint Helena (+246)</option>
                                <option value="+247">🇦🇨 Ascension Island (+247)</option>
                                <option value="+248">🇸🇨 Seychelles (+248)</option>
                                <option value="+249">🇸🇩 Sudan (+249)</option>
                                <option value="+250">🇷🇼 Rwanda (+250)</option>
                                <option value="+251">🇪🇹 Ethiopia (+251)</option>
                                <option value="+252">🇸🇴 Somalia (+252)</option>
                                <option value="+253">🇩🇯 Djibouti (+253)</option>
                                <option value="+254">🇰🇪 Kenya (+254)</option>
                                <option value="+255">🇹🇿 Tanzania (+255)</option>
                                <option value="+256">🇺🇬 Uganda (+256)</option>
                                <option value="+257">🇧🇮 Burundi (+257)</option>
                                <option value="+258">🇲🇿 Mozambique (+258)</option>
                                <option value="+260">🇿🇲 Zambia (+260)</option>
                                <option value="+261">🇲🇬 Madagascar (+261)</option>
                                <option value="+262">🇾🇹 Mayotte / 🇷🇪 Réunion (+262)</option>
                                <option value="+263">🇿🇼 Zimbabwe (+263)</option>
                                <option value="+264">🇳🇦 Namibia (+264)</option>
                                <option value="+265">🇲🇼 Malawi (+265)</option>
                                <option value="+266">🇱🇸 Lesotho (+266)</option>
                                <option value="+267">🇧🇼 Botswana (+267)</option>
                                <option value="+268">🇸🇿 Eswatini (+268)</option>
                                <option value="+269">🇰🇲 Comoros (+269)</option>
                                {/* … add more */}
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="812 345 6789"
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            rows="5"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>

                    {successMessage && (
                        <p className="text-green-600 font-medium">{successMessage}</p>
                    )}
                    {errorMessage && (
                        <p className="text-red-600 font-medium">{errorMessage}</p>
                    )}
                </form>

            </div>


        </div>
    );
};



