import NewsItem from "../news-item/news-item.tsx";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

export interface Source {
    id: string | null;
    name: string;
}

export interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface ServerResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

const NewsSection = () => {

    const [news, setNews] = useState<ServerResponse>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [itemsCount, setItemsCount] = useState(10)

    async function fetchNews() {
        const response: AxiosResponse<ServerResponse> = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=${itemsCount}&apiKey=c8e2c2fd02db4618853590ef8e92c64c`)
        setNews(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchNews().catch(() => setError(true))
    }, [itemsCount])

    if (loading) {
        return <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, marginTop: 100}}>
            News are loading...
        </div>
    }

    if (error) {
        return <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, marginTop: 100}}>
            Sorry, request failed, try again
        </div>
    }

    return (
        <div style={{width: "70%", margin: "0 auto", marginTop: 20}}>
            {news?.articles.map((item: Article) => (
                <NewsItem item={item}/>
            ))}
           <div style={{display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 40}}>
               <button style={{fontSize: 24, background: "rgba(34,132,234,0.71)", color: "white"}} onClick={() => setItemsCount((prev) => prev + 10)}>
                   Load More
               </button>
           </div>
        </div>
    );
};

export default NewsSection;