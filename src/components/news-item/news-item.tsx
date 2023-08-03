import {Article} from "../news-section/news-section.tsx";
import {FC} from "react";

interface NewsItemProps {
    item: Article
}

const NewsItem: FC<NewsItemProps> = ({item}) => {
    return (
        <div style={{minHeight: 100, border: "1px solid grey", marginTop: 10,paddingTop: 10, display: "flex", flexDirection: "column", gap: 10}}>
            <h2 style={{textAlign: "center"}}>{item.title}</h2>
            <p>{item.description}</p>
        </div>
    );
};

export default NewsItem;