import UserNews from './userNews.js';
import UserTop5Manga from './userTop5Manga.js';
import MangaCards from './mangaCards.js';

const Main = () => {
  
  return (
    <div>
      <UserTop5Manga />
      <UserNews />
      <MangaCards />
    </div>
  );
};

export default Main;
