import React, { useState, useEffect } from "react";

const WishListPage = () => {
  const [mangaInfo, setMangaDataState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWishList();
  }, []);

  const fetchWishList = async () => {
    try {
      const response = await fetch("/executeQuery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: "SELECT manga_name FROM user_wishlist",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      if (data.success) {
        setMangaDataState(data.rows); // Set the manga data array
        console.log("Retrieved data:", data.rows);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "100px", color: "black" }}>
      <h1  style={{  color: "black" }}> Wish List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {mangaInfo.map((manga, index) => (
            <li  style={{  color: "black" }} key={index}>{manga.manga_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishListPage;
