import React from 'react';
import { useParams } from 'react-router-dom';
import MangaDetailHeader from '../scripts/detail.js';
import MainContent from '../scripts/MainContent.js';

function ListAndHeader() {
  const { mangaTitle, mangaAuthor, mangaDescription, mangaGenre, mangaCoverImage,totalChapters } = useParams();

  const mangaInfo = {
    title: mangaTitle,
    author: mangaAuthor,
    description: mangaDescription,
    genre: mangaGenre,
    Cover_Image: mangaCoverImage,
    Total_Chapters:totalChapters
  };

  return (
    <div className="app">
      <MangaDetailHeader mangaInfo={mangaInfo} />
      <MainContent Info={mangaInfo}/>
    </div>
  );
}

export default ListAndHeader;
