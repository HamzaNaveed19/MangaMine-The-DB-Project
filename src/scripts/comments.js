import React, { useState, useEffect } from 'react';
import '../style/comments.css'; // Ensure the CSS file is correctly linked
const Comment = ({ user_name, descrip, date }) => (
  <div className="cardforcomment mb-3">
    <div className="cardforcomment-body">
      <h5 className="cardforcomment-title">{user_name}</h5>
      <p className="cardforcomment-text">{descrip}</p>
      <p className="cardforcomment-text">Date: {date}</p>
      <hr />
    </div>
  </div>
);

const Comments = ({ mangaInfo }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [commentText, setCommentText] = useState('');
  const username = localStorage.getItem('username');

  const fetchComments = async () => {
    try {
      const response = await fetch('/executeQuery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sql: `exec GetComments @mangaName='${mangaInfo.title}'` })
      });
      const responseData = await response.json();
      if (responseData.success) {
        setCommentsData(responseData.rows);
      } else {
        throw new Error('No comments found for this manga.');
      }
    } catch (error) {
      console.error('Error fetching comments:', error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [mangaInfo.title]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/executeQuery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sql: `exec AddComment @descrip='${commentText}', @username='${username}', @mangaName='${mangaInfo.title}'` })
      });
      const responseData = await response.json();
      if (responseData.success) {
        fetchComments(); // Refresh comments after successful submission
        setCommentText(''); // Clear the comment textarea
      } else {
        throw new Error('Failed to add comment.');
      }
    } catch (error) {
      console.error('Error adding comment:', error.message);
    }
  };

  return (
    <div className="coomentpage">
      <h3>Comments</h3>
      <hr />
      <div className="cardforcomment">
        <div className="cardforcomment-body">
          <h5 className="cardforcomment-title">Leave a comment</h5>
          <hr />
          <form onSubmit={handleCommentSubmit}>
            <div className="commentform-group">
              <textarea
                rows="3"
                className="input-comment commentform-control bg-light"
                placeholder="Enter your comment here..."
                style={{ resize: 'none' }}
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btnforcomment">Comment</button>
          </form>
        </div>
      </div>

      {commentsData.map((data, index) => (
        <Comment key={index} {...data} />
      ))}
    </div>
  );
};

export default Comments;