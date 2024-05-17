import React, { useState, useEffect } from "react";

const MangaInputPage = () => {
  const [mangaName, setMangaName] = useState("");
  const [mangaData, setMangaData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    chapters: "",
    author: "",
    genres: "",
    release_date: "",
    description: "",
    status: "",
    score: "",
    rank: "",
    popularity: "",
    imageUrl: "",
  });

  const handleInputChange = (event) => {
    setMangaName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleEnter();
    }
  };

  useEffect(() => {
    if (mangaData) {
      setFormData({
        title: mangaData.title || "",
        chapters: mangaData.chapters || "",
        author:
          mangaData.authors && mangaData.authors.length > 0
            ? mangaData.authors[0].name || ""
            : "Unknown Author",
        genres:
          mangaData.genres && mangaData.genres.length > 0
            ? mangaData.genres.map((genre) => genre.name).join(", ") || ""
            : "Unknown Genre",
        release_date:
          mangaData.published && mangaData.published.from
            ? mangaData.published.from.split("T")[0] || ""
            : "0-0-0",
        description: mangaData.synopsis || "No Description Available",
        status: mangaData.status || "Unknown Status",
        score: mangaData.score || 0,
        rank: mangaData.rank || 0,
        popularity: mangaData.popularity || 0,
        imageUrl: mangaData.images.jpg.large_image_url || "no image found",
      });
    }
  }, [mangaData]);

  const handleEnter = async () => {
    setMangaName("");
    const mangaTitle = mangaName;

    const mangaDataResponse = await searchMangaByTitle(mangaTitle);

    if (mangaDataResponse) {
      setMangaData(mangaDataResponse.data[0]);
      setShowModal(true);
    } else {
      console.log("Manga not found or API request failed.");
    }
  };

  const handleSave = async () => {
    const title = formData.title || "Unknown Title";
    const chapters = formData.chapters || 0;
    const author = formData.author || "Unknown Author";
    const genres = formData.genres || "Unknown Genre";
    const release_date = formData.release_date || "0-0-0";
    let description = formData.description || "No Description Available";
    const status = formData.status || "Unknown Status";
    const score = formData.score || 0;
    const rank = formData.rank || 0;
    const popularity = formData.popularity || 0;
    const imageUrl = formData.imageUrl || "no image found";

    description = sanitizedDescription(description);

    const query = `EXEC AddNewManga 
      @title='${title}', 
      @author='${author}',
      @genre='${genres}', 
      @release_date='${release_date}',
      @description='${description}',
      @total_chapters=${chapters}, 
      @status='${status}',
      @score=${score}, 
      @rank=${rank}, 
      @popularity=${popularity}, 
      @image_url='${imageUrl}'`;

    const response = await fetch("/executeQuery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sql: query }),
    });

    if (!response.ok) {
      console.error("Failed to execute query on server.");
    } else {
      console.log("Manga added successfully.");
      setShowModal(false);
    }
  };

  const searchMangaByTitle = async (title) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?q=${title}`);

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const sanitizedDescription = (description) => {
    const sanitizedDescription = description.replace(/['"`]/g, "");
    return sanitizedDescription;

  
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" , marginTop:"100px"}}
    >
      <h1 style={{ color: "black", textAlign: "center" }}>Enter Manga Name</h1>
      <input
        type="text"
        placeholder="Enter manga name"
        value={mangaName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={{ marginBottom: "10px", color: "black", }}
      />

      {showModal && mangaData && (
        <div style={{ color: "black" }} className="modal">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <label style={{ color: "black" }}  htmlFor="title">Title:</label>
              <input 
                type="text"
                name="title"
                value={formData.title}
                placeholder="Manga Title"
                onChange={handleFormChange}
                style={{ width: "345px" ,color: "black" }}
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="chapters">Chapters:</label>
              <input
                type="text"
                name="chapters"
                value={formData.chapters}
                placeholder="Number of Chapters"
                onChange={handleFormChange}
                style={{ width: "317px",color: "black"  }}
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="author">Author:</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                placeholder="Author"
                onChange={handleFormChange}
                style={{ width: "330px" ,color: "black"  }}
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="genres">Genres:</label>
              <input
                type="text"
                name="genres"
                value={formData.genres}
                placeholder="Genres"
                onChange={handleFormChange}
                style={{ width: "327px" ,color: "black" }}
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="release_date">Release Date:</label>
              <input
                type="text"
                name="release_date"
                value={formData.release_date}
                placeholder="Release Date"
                onChange={handleFormChange}
                style={{ width: "290px" ,color: "black"  }}
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                placeholder="Description"
                onChange={handleFormChange}
                style={{ width: "300px" ,color: "black"  }} // Adjust the width as needed
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="status">Status:</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                placeholder="Status"
                onChange={handleFormChange}
                style={{ width: "330px" ,color: "black"  }} // Adjust the width as needed
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="score">Score:</label>
              <input
                type="number"
                name="score"
                value={formData.score}
                placeholder="Score"
                onChange={handleFormChange}
                style={{ width: "333px" ,color: "black"  }} // Adjust the width as needed
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="rank">Rank:</label>
              <input
                type="number"
                name="rank"
                value={formData.rank}
                placeholder="Rank"
                onChange={handleFormChange}
                style={{ width: "337px" ,color: "black" }} // Adjust the width as needed
              />
            </div>
            <div>
              <label style={{ color: "black" }}  htmlFor="popularity">Popularity:</label>
              <input
                type="number"
                name="popularity"
                value={formData.popularity}
                placeholder="Popularity"
                onChange={handleFormChange}
                style={{ width: "305px" ,color: "black" }} // Adjust the width as needed
              />
            </div>
            {/* <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            placeholder="Image URL"
            onChange={handleFormChange}
          />
        </div> */}
          </div>
          <button
            onClick={handleSave}
            style={{
              marginLeft: "115px",
              marginTop: "20px",
              alignItems: "center",
              color: "black" 
            }}
          >
            Save to Database
          </button>
        </div>
      )}
    </div>
  );
};

export default MangaInputPage;
