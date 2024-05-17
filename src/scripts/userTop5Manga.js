import React, { useState } from "react";
import "../style/userTop5Manga.css"; // Import your CSS file

function HorizontalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array containing data for each item
  const dataArray = [
    {
      imageUrl: "https://cdn.myanimelist.net/images/manga/1/157897l.jpg",
      author: "Kentarou Miura",
      title: "Berserk",
      year: "1989",
      description:
        "Guts, a former mercenary now known as the Black Swordsman, is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings. Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity. [Written by MAL Rewrite] Included one-shot: Volume 14: Berserk: The Prototype",
      genre:
        "Action, Adventure, Award Winning, Drama, Fantasy, Horror, Supernatural",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/manga/1/259070l.jpg",
      author: "Takehiko Inoue",
      title: "Vagabond",
      year: "1998",
      description:
        "In 16th-century Japan, Shinmen Takezou is a wild, rough young man, in both his appearance and his actions. His aggressive nature has won him the collective reproach and fear of his village, leading him and his best friend, Matahachi Honiden, to run away in search of something grander than provincial life. The pair enlist in the Toyotomi army, yearning for glory—but when the Toyotomi suffer a crushing defeat at the hands of the Tokugawa Clan at the Battle of Sekigahara, the friends barely make it out alive. After the two are separated, Shinmen returns home on a self-appointed mission to notify the Honiden family of Matahachis survival. He instead finds himself a wanted criminal, framed for his friends supposed murder based on his history of violence. Upon being captured, he is strung up on a tree and left to die. An itinerant monk, the distinguished Takuan Soho, takes pity on the devil child, secretly freeing Shinmen and christening him with a new name to avoid pursuit by the authorities: Musashi Miyamoto. Vagabond is the fictitious retelling of the life of one of Japans most renowned swordsmen, the Sword Saint Musashi Miyamoto—his rise from a swordsman with no desire other than to become Invincible Under the Heavens to an enlightened warrior who slowly learns of the importance of close friends, self-reflection, and life itself. [Written by MAL Rewrite]",
      genre: "Action, Adventure, Award Winning",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/manga/2/253146l.jpg",
      author: "Eiichiro Oda",
      title: "One Piece",
      year: "1997",
      description:
        "Gol D. Roger, a man referred to as the King of the Pirates, is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the King of the Pirates is executed and the Great Age of Pirates begins. Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new King of the Pirates. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas. [Written by MAL Rewrite]",
      genre: "Action, Adventure, Fantasy",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/manga/3/258224l.jpg",
      author: "Naoki Urasawa",
      title: "Monster",
      year: "1994",
      description:
        "Kenzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an orphan boy on the verge of death, or on the mayor of Düsseldorf. In the end, Tenma decides to gamble his reputation by saving Johan, effectively leaving the mayor for dead. As a consequence of his actions, hospital director Heinemann strips Tenma of his position, and Heinemanns daughter Eva breaks off their engagement. Disgraced and shunned by his colleagues, Tenma loses all hope of a successful career—that is, until the mysterious killing of Heinemann gives him another chance. Nine years later, Tenma is the head of the surgical department and close to becoming the director himself. Although all seems well for him at first, he soon becomes entangled in a chain of gruesome murders that have taken place throughout Germany. The culprit is a monster—the same one that Tenma saved on that fateful day nine years ago. [Written by MAL Rewrite]",
      genre: "Award Winning, Drama, Mystery",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/manga/2/171872l.jpg",
      author: "Yasuhisa Hara",
      title: "Kingdom",
      year: "2006",
      description:
        "During the Warring States period in China, Xin and Piao are two brother-like youngsters who dream of becoming Great Generals, despite their low status as orphaned slaves. One day, they encounter a man of nobility, who gives Piao an opportunity to undertake an important duty within the state of Qins royal palace. Parting ways, Xin and Piao promise each other to one day become the greatest generals in the world. However, after a fierce coup détat occurs in the palace, Xin meets with a dying Piao, whose last words spur him into action and lead him to encounter the young and soon-to-be king of Qin, Zheng Ying. Although initially on bad terms, Xin and Zheng become comrades and start on a path filled with trials and bloodshed. Zhengs objective is to bring all the warring states under Qin, and Xin seeks to climb to the very top of the army ranks. Against a backdrop of constant tactical battle between states and great political unrest, both outside and within the palace, the two endeavor towards their monumental ambitions that will change history forever. [Written by MAL Rewrite]",
      genre: "Action, Award Winning",
    },
    // Add data for other items here
  ];

  // Function to handle next button click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
  };

  const currentItem = dataArray[currentIndex];

  return (
    <div className="gallery-wrap">
      <div className="slide-element">
        <div className="is-poster">
          <img
            id="imageId"
            src={currentItem.imageUrl}
            className="snipcss0-2-2-6"
            alt="Poster"
          />
        </div>
        <div className="is-caption">
          <h2 className="heading-xl">
            <a
              href="#"
              title={currentItem.title}
              previewlistener="true"
              className="snipcss0-3-12-13"
              id="titleId"
            >
              {currentItem.title}
            </a>
          </h2>
          <h3 className="is-rate">{currentItem.author}</h3>
          <p className="description" id="descriptionId">
            {currentItem.description}
          </p>
          <div className="film-info">
            <span className="item">{currentItem.genre}</span>
            <span className="item">{currentItem.year}</span>
          </div>
          <div className="div-buttons-next">
            <button
              onClick={handleNextClick}
              className="btn w-icon btn-watch"
              previewlistener="true"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalSlider;
