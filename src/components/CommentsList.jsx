import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import CommentItem from "./CommentItem";

export default function CommentsList({ currentUser }) {
    
  const [comments, setComments] = useState([]);
  const adminEmails = ["nkwededavid27@gmail.com"];
  const isAdmin = adminEmails.includes(currentUser?.email);

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-4">
      <h2 className="text-xl font-bold">Comments</h2>
      {comments.length === 0 && (
        <p className="text-gray-500">No comments yet. Be the first!</p>
      )}
      {comments.map((c) => (
        <div key={c.id} className="border p-3 rounded-md shadow-sm">
          <CommentItem key={c.id} c={c} isAdmin={isAdmin} />
        </div>
      ))}
    </div>
  );
}

