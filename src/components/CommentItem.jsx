import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function CommentItem({ c }) {
    const handleDelete = async () => {
        await deleteDoc(doc(db, "comments", c.id));
    };

    return (
        <div className="border p-3 rounded-md shadow-sm">
            <h3 className="font-bold">{c.author}</h3>
            <p className="text-gray-700">{c.comment}</p>
            <small className="text-gray-500">{c.email}</small>
            {c.createdAt && (
                <small className="block text-gray-400">
                    {new Date(c.createdAt.seconds * 1000).toLocaleString()}
                </small>
            )}

            <button
                onClick={handleDelete}
                className="ml-2 text-red-500 hover:underline border-2 rounded-md px-2 py-1 mt-3"
            >
                Delete
            </button>
        </div>
    );
}

export default CommentItem;