import React, { useState, useEffect } from 'react';
import '../style/mangaReader.css';
import mangaImage from "../img/image-4.png"; // Ensure the image path is correct if using an image from local assets

const MangaReader = ({ mangaInfo }) => {
    console.log(mangaInfo);

    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
    let currentChapter = mangaInfo.chapter; 
    let currentPage = 1;  
    let markedReadPage=1;
    const baseUrl = `https://images.mangafreak.me/mangas`;
    let mangaName = mangaInfo.title;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if needed
    
    const formattedDate = `${year}-${month}-${day}`;

    const email = localStorage.getItem('username');

    mangaName = mangaInfo.title.toLowerCase().replace(/\s+/g, '_');
    console.log(mangaName);

    const saveProgress = async () => {
        console.log("Saving reading progress...");
    
        try {
            const response = await fetch("/executeQuery", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sql: `EXEC InsertReadingHistory 
                    @manga_id = '${mangaInfo.manga_id}',
                    @user_id = '${email}',
                    @chapter_number = '${currentChapter}',
                    @last_read = '${formattedDate}'`,
                }),
            });
    
            if (!response.ok) {
                console.error("Failed to execute query on server.");
              } else {
                console.log("Manga added successfully.");
              }
    
            // Handle any further logic here if needed
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }    

    // Function to load a manga page
    async function loadMangaPage() {

        //let imageUrl = ${baseUrl}/${mangaName}/${mangaName}_${currentChapter}/${mangaName}_${currentChapter}_${currentPage}.jpg;
        let imageUrl = `/manga-images/${mangaName}/${currentChapter}/${currentPage}`;

        // Create an image element
        const img = new Image();

        // Set an event listener to check if the image is loaded successfully
        img.onload = function () {
            // If the image is loaded successfully, set it as the source of the manga image element
            document.getElementById("mangaImage").src = imageUrl;
            // Update chapter and page number information
            document.getElementById("chapterNumber").textContent = currentChapter;
            document.getElementById("pageNumber").textContent = currentPage;
        };

        // Set an event listener to handle errors during image loading
        img.onerror = (error) => {
            // Move to the next chapter if available
            if (currentChapter < mangaInfo.Total_Chapters) {
                currentChapter++;
                currentPage = 1; // Reset to first page of the next chapter
                loadMangaPage();
            } else {
                console.error("Failed to load image and no more chapters available.");
            }
        };

        // Set the image source
        img.src = imageUrl;
    }

    // Function to navigate to previous page
    function previousPage() {
        if (currentPage > 1) {
            currentPage--;
        } else {
            // Move to the previous chapter if available
            if (currentChapter > 1) {
                currentChapter--;
                currentPage = 1; // Reset to first page of the previous chapter
            }
        }
        loadMangaPage();
    }

    // Function to navigate to next page
    function nextPage() {
        currentPage++;
        loadMangaPage();
    }


    useEffect(() => {

        loadMangaPage();

        console.log("Adding event listener");
        // Add event listener for beforeunload
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            console.log("Removed event listener");
            saveProgress()
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };

    }, []); // Load manga page when component is mounted

    

    // Function to handle beforeunload event
    const handleBeforeUnload = (event) => {
        // Call saveProgress function when user leaves the page
        console.log("Running event listener");
        saveProgress();
        // Cancel the default behavior to show the browser's confirmation dialog
        event.preventDefault();
        // Chrome requires returnValue to be set
        event.returnValue = '';
    };
    return (
        <div className="manga-reader-container">
            <div>
                <div id="chapterPageInfo">
                    <p>Chapter: <span id="chapterNumber" className="page-info">{currentChapter}</span></p>
                    <p>Page Number: <span id="pageNumber" className="page-info">{currentPage}/-</span></p>
                    {markedReadPage && (
                        <p>Marked as read up to page: <span className="page-info">{markedReadPage}</span></p>
                    )}
                </div>
                <div id="mangaViewer">
                    <img id="mangaImage" src={mangaImage} alt="Manga Page" />
                </div>
                <div id="navigationButtons" style={{ color: "black", borderRadius: "40%" }}>
                    <button onClick={previousPage}>Previous Page</button>
                    <button onClick={nextPage}>Next Page</button>
                    {/* <button onClick={markRead}>Mark as Read</button> */}
                </div>
            </div>
        </div>
    );
};

export default MangaReader;