
import { useState } from "react";
import "./Comment.css";

function App() {

  const [comment, setComment] = useState("");
  const [allcomments, setallComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment === "") return;

    setallComments([...allcomments, comment]);
    setComment("");
  };

  return (
    <div className="container">
      <h2>Comments :</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter The Comment"
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className="comment-section">
        {allcomments.length === 0
          ?
          (<p>No Comments...</p>)
          : (
            allcomments.map((cmt, index) => (
              <div key={index} className="comment">
                <strong>{index + 1} :</strong>{cmt} <br />
              </div>
            ))
          )}
      </div>
    </div>
  );
}

export default App;
