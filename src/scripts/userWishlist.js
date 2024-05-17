import React, { useState } from "react";
import '../style/userWishlist.css';
import { useParams } from 'react-router-dom';

const WishlistInputPage = () => {
 // const { email } = useParams(); // Destructure email from useParams()
  const [wishName, setWishName] = useState('');
 const [responseMessage, setResponseMessage] = useState('');
   const email = localStorage.getItem('username');

  const handleTitleChange = (event) => {
    setWishName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleEnter();
    }
  };

  const handleEnter = async () => {
    try {
      // Sending the request to add manga to wishlist
      const response = await fetch('/executeQuery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sql: `exec AddMangaToWishlist @mangaName='${wishName}', @username='${email}'`
        })
      });
      console.log(wishName,email);
      if (!response.ok) {
        throw new Error('Failed to add manga to wishlist.');
      }

      const responseData = await response.json();
      console.log(responseData); // Log response for inspection

      if (responseData.success) {
        setResponseMessage('Manga added to wishlist successfully.');
      } else {
        throw new Error('Failed to add manga to wishlist.');
      }
    } catch (error) {
      console.error(error);
      setResponseMessage('Error: ' + error.message);
    } finally {
      // Clear the input field
      setWishName('');
    }
  };

  return (
    <div className="wishcontainer">
      <h1>Enter Manga Name</h1>
      <div>
        <input
          type="text"
          placeholder="Enter title"
          value={wishName}
          onChange={handleTitleChange}
          onKeyPress={handleKeyPress}
          style={{color: "black"}}
        />
      </div>
      <div className="button-on-submit"> 
        <button 
          onClick={handleEnter}
          className="btn w-sub btn-watch"
        >
          Submit Wishlist
        </button>
      </div>
      <div id="responseMessage">{responseMessage}</div>
    </div>
  );
};

export default WishlistInputPage;
