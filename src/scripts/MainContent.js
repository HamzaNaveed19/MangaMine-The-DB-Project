import ChapterList from '../scripts/unit.js'; 
import Footer from '../scripts/footer';
import '../style/MainContent.css'; // Assuming separate CSS for this component
import Cards from '../scripts/mangaCards.js'; 
import Comments from '../scripts/comments'; 
const MainContent = ({Info}) => {

    console.log(Info);
    return (
        <div className="main-content">
            
            <div className="content-split">
                <div className="left-half">
                <ChapterList mangaInfo={Info} />

                </div>
                <div className="right-half">
                    {<Comments mangaInfo={Info}/>}
                    <h1 className="Recommendations">Recommendations</h1>
                    {<Cards/>}
                </div>
            </div>
        </div>
    );
};

export default MainContent;
