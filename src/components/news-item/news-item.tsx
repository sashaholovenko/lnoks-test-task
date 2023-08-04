import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Article} from "../../models/types.ts";


interface NewsItemProps {
    item: Article
}

const NewsItem: FC<NewsItemProps> = ({item}) => {
    const navigate = useNavigate()

    // TODO: here should be normal id from API, but given API doesn't give it, so handling such routes is impossible in right way
    const mockItemId = 1;

    return (
        <div  onClick={() => {navigate(`/${mockItemId}`)}} style={{minHeight: 100, border: "1px solid grey", marginTop: 10,paddingTop: 10, display: "flex", flexDirection: "column", gap: 10}}>
            <h2 style={{textAlign: "center"}}>{item.title}</h2>
            <p>{item.content}</p>
        </div>
    );
};

export default NewsItem;