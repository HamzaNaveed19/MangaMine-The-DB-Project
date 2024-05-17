import React, { useEffect } from "react";
import "../style/news.css"; // Import CSS file
import newsPersonImage from "../img/newsPerson.png"; // Import newsPerson image

const TypewriterComponent = () => {


  useEffect(() => {
    const dataText = ["Via Daily Hive, fans can head down to 1274 Robson Street in Vancouver for Canada's first Hello Kitty Café."];

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        document.querySelector("#newsh1").innerHTML =
          text.substring(0, i + 1) + '<span id="news-span" aria-hidden="true"></span>';

        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === "function") {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }

    function StartTextAnimation() {
      typeWriter(dataText[0], 0, function () {
        // animation finished
      });
    }

    // start the text animation
    StartTextAnimation();
  }, []);

  return (
    <div id="news-body">
      <div className="news-frame">
        <img src={newsPersonImage} alt="temp" className="news-image" />
        <h1 id="newsh1">lk</h1>
      </div>
    </div>
  );
};

export default TypewriterComponent;


// import React, { useEffect, useState } from "react";
// import "../style/news.css"; // Import CSS file
// import newsPersonImage from "../img/newsPerson.png"; // Import newsPerson image

// const TypewriterComponent = () => {
//   const [dataText, setDataText] = useState([]);

//   const getAllMangaInfo = async () => {
//     try {
//       const response = await fetch("/executeQuery", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           sql: "SELECT top 1 from news",
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();
//       if (data.success) {
//         console.log("Retrieved data:", data.rows);
//         Extract text from data.rows and set it to dataText array
//         setDataText(data.rows.map(row => row.news_text));
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } 
//   };

//   useEffect(() => {
//     getAllMangaInfo();
  
//     function typeWriter(text, i, fnCallback) {
//       if (i < text.length) {
//         document.querySelector("#newsh1").innerHTML =
//           text.substring(0, i + 1) + '<span id="news-span" aria-hidden="true"></span>';
  
//         setTimeout(function () {
//           typeWriter(text, i + 1, fnCallback);
//         }, 100);
//       } else if (typeof fnCallback === "function") {
//         call callback after timeout
//         setTimeout(fnCallback, 700);
//       }
//     }
  
//     function StartTextAnimation() {
//       if (dataText.length > 0) {
//         typeWriter(dataText[0], 0, function () {
//           animation finished
//         });
//       }
//     }
  
//     start the text animation
//     StartTextAnimation();
//   }, [dataText]);
  

//   return (
//     <div id="news-body">
//       <div className="news-frame">
//         <img src={newsPersonImage} alt="temp" className="news-image" />
//         <h1 id="newsh1">{dataText}</h1>
//       </div>
//     </div>
//   );
// };

// export default TypewriterComponent;