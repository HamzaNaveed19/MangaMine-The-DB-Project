import React from 'react';
import '../style/detail.css';
import { useLocation } from 'react-router-dom';

const MangaDetailHeader = ({ mangaInfo }) => {

    const { Cover_Image, title, author, description, genre } = mangaInfo;

    return (
        <div className="oiuytr TitleDetailHeader-module_right1_1o9Bj snipcss-WK42Z">
            <div className="manga-imgCover TitleDetailHeader-module_cover_3ljyH">
                <img 
                    src={Cover_Image} 
                    alt={title}
                    className="manga-img TitleDetailHeader-module_coverImage_3rvaT"
                />
                <div>
                    <button className="styles-module_btn_17GWO styles-module_default_uUjEB TitleDetailHeader-module_favoritedBtn_Z2Lrg">
                        Add to Favorite
                    </button>
                </div>
            </div>

            <div className="title-container TitleDetailHeader-module_info_1_7BN snipcss0-0-0-1">
                <h1 className="manga-name TitleDetailHeader-module_title_Iy33M snipcss0-1-1-2">{title}</h1>
                <h2 className="author-name TitleDetailHeader-module_author_3Q2QN snipcss0-1-1-3">Author: {author}</h2>
                <div className="TitleDetailHeader-module_overviewTitleWrapper_3_vMN snipcss0-2-4-5">
                    <h6 className="TitleDetailHeader-module_overviewTitle_1X9aO snipcss0-3-5-6">Summary</h6>
                    <p className="summary TitleDetailHeader-module_overview_32fOi snipcss0-2-4-11">{description}</p>
                </div>
                <div className="genre-container">
                    {genre.split(', ').map((genre, index) => (
                        <div key={index} className="genre-tag">
                            {genre}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MangaDetailHeader;