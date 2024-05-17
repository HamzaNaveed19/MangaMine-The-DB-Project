import React from 'react';
import '../style/Viewer.css'; // Assuming this CSS file includes all necessary styles
import MangaReader from './mangaReader.js'; // Ensure this is the correct path
import ChapterList from './unit.js'; // Ensure this is the correct path
import { useParams } from 'react-router-dom';

const MangaViewer = () => {
  const { mangaTitle,num,totalChapters,coverImage}=useParams();

  const Info={
    chapter:num,
    title: mangaTitle,
    Total_Chapters: totalChapters,
    Cover_Image: coverImage
  }

  console.log(Info);

  return (
    <div className="manga-viewer">
      <div className="manga-reader-container">
        <MangaReader mangaInfo={Info}/>
      </div>
      <div className="chapter-list-container">
        <ChapterList mangaInfo={Info} />
      </div>
    </div>
  );
};

export default MangaViewer;
