import React from 'react';
import '../style/unit.css';
import thumbnailImage from '../img/image-19.png';
import { Link } from 'react-router-dom';

function ChapterList({ mangaInfo }) {

    const units = Array.from({ length: mangaInfo.Total_Chapters }, (_, index) => (
        <div key={index} className="unit-container ChapterListItem-module_chapterListItem_ykICp">
            <div className="ChapterListItem-module_chapterWrapper_3CxyE">
                <img alt="thumbnail" src={mangaInfo.Cover_Image} className="ChapterListItem-module_thumbnail_alreadyRead_1u3_a" />
                <div className="ChapterListItem-module_chapterNameContainer_3MJKj">
                    <p className="ChapterListItem-module_name_alreadyRead_1HYKk">#00{index + 1}</p>
                    <p className="ChapterListItem-module_commentCount_4FxT-">
                        <img src="https://mangaplus.shueisha.co.jp/img/icon_comment.c437702e.svg"
                             className="ChapterListItem-module_commentIconMini_1hQ5R" />293
                    </p>
                </div>
                <p className="ChapterListItem-module_title_alreadyRead_3tKxq">Chapter {index + 1}</p>
                <p className="ChapterListItem-module_date_alreadyRead_31MGZ">24 Feb 2023</p>
            </div>
            <Link to={`/scripts/Viewer/${encodeURIComponent(mangaInfo.title)}/${index + 1}/${encodeURIComponent(mangaInfo.Total_Chapters)}/${encodeURIComponent(mangaInfo.Cover_Image)}`} className="ChapterListItem-module_commentContainer_1P6qt">
                <img src="https://mangaplus.shueisha.co.jp/img/btn_comment@4x.188ef5f1.svg" 
                     alt="View Chapter" 
                     className="ChapterListItem-module_commentIcon_3lw4k" />
            </Link>

        </div>
    ));

    return (
        <main className="TitleDetail-module_main_19fsJ snipcss-kiHlk right-half">
            <div className="ChapterList-module_chapterListTitleWrapper_1MLyK">
                <h6 className="ChapterList-module_chapterListTitle_3-F05">Chapter List</h6>
            </div>
            {units}
        </main>
    );
}

export default ChapterList;