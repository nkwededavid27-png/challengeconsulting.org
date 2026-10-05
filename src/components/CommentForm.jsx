import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";



export default function CommentForm() {


    const [formData, setFormData] = useState({
        author: "",
        email: "",
        url: "",
        comment: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false); // NEW

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "comments"), {
                ...formData,
                createdAt: serverTimestamp(),   // <-- here
            });

            setSuccessMessage("✅ Comment submitted!");
            setFormData({ author: "", email: "", url: "", comment: "" });
            setTimeout(() => setSuccessMessage(""), 3000);
        } catch (err) {
            console.error("❌ Error adding comment:", err);
            setSuccessMessage("❌ Something went wrong.");
        } finally {
            setLoading(false);
        }

        
        console.log("✅ Document written with ID:", formData);

    };




    return (
        <div className="max-w-2xl  p-6 bg-white shadow-md rounded-md mt-10">
            <h2 className="text-2xl font-semibold mb-4">Leave a comment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Name *</label>
                    <input
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Email *</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Website</label>
                    <input
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Comment *</label>
                    <textarea
                        name="comment"
                        rows="5"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-blue-900 transition flex items-center justify-center"
                >
                    {loading ? (
                        <>
                            <svg
                                className="animate-spin h-5 w-5 text-black"  // spinner color
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                                ></path>

                            </svg>
                            <span>Submitting…</span>
                        </>
                    ) : (
                        "Submit"
                    )}
                </button>

            </form>

            {/* Success/Error message */}
            {successMessage && (
                <p
                    className={`mt-4 font-medium ${successMessage.startsWith("✅") ? "text-green-600" : "text-red-600"
                        }`}
                >
                    {successMessage}
                </p>
            )}

        </div>
    );
}
