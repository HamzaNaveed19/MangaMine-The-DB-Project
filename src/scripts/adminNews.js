import React, { useState } from "react";

const NewsInputPage = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [recentNews, setRecentNews] = useState([]);

  

  const handleTitleChange = (event) => {
    setNewsTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setNewsContent(event.target.value);
  };

  async function handleEnter() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if needed
    
    const formattedDate = `${year}-${month}-${day}`;
    //console.log("News added successfully.");
    // Add the new news to the recent news list
   const news = { title: newsTitle, content: newsContent, date: formattedDate };
   const updatedNews = [news, ...recentNews.slice(0, 9)];
   setRecentNews(updatedNews);

   // console.log(news);

    // Clear the input fields
    setNewsTitle("");
    setNewsContent("");

    console.log( newsTitle,newsContent,formattedDate);

    try {
      const response = await fetch("/executeQuery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: `EXEC AddNews 
          @title='${newsTitle}', 
          @content = '${newsContent}',
          @publish_date = '${formattedDate}';`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }

    // server code here
  }

  return (
    <div style={{ color: "black", marginTop: "100px", textAlign: "center" }}>
      <h1 style={{ color: "black" }}>Enter Manga News</h1>
      <div>
        <label style={{ color: "black" }}>Title:</label>
        <input
          style={{ color: "black" }}
          type="text"
          placeholder="Enter title"
          value={newsTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label style={{ color: "black" }}>Content:</label>
        <textarea
          style={{ color: "black" }}
          placeholder="Enter content"
          value={newsContent}
          onChange={handleContentChange}
        />
      </div>
      <button onClick={handleEnter} style={{ color: "black" }}>
        Submit News
      </button>
      <div>
        <h2 style={{ color: "black" }}>Recent News:</h2>
        <ul style={{ color: "black" }}>
          {recentNews.map((news, index) => (
            <li style={{ color: "black" }} key={index}>
              <strong style={{ color: "black" }}>{news.title}</strong>:{" "}
              {news.content} - {news.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsInputPage;
