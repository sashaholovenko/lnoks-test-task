import NewsItem from "../news-item/news-item.tsx";
import {useCallback, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {newsAPI} from "../../services/news-service.ts";
import {Article} from "../../models/types.ts";
import debounce from "lodash.debounce"


const NewsSection = () => {

    const [itemsCount, setItemsCount] = useState(10)
    const { data, error, isLoading } = newsAPI.useFetchAllNewsQuery(itemsCount)
    const  [ search, setSearch ] = useState<string>('')
    const [ filter, setFilter ] = useState<string>("title")

    const onChangeInput = useCallback(
        debounce((event) => {
            setSearch(event.target.value)
        }, 250), []
    )
    if (isLoading) {
        return <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, marginTop: 100}}>
            News are loading...
        </div>
    }

    if (error) {
        return <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, marginTop: 100}}>
            Sorry, request failed, try again
        </div>
    }
    const filterData = ( filterParam: string, search: string) => {
        return data?.articles.filter( (elem: Article) => (
                elem[filterParam].toLowerCase().includes(search.toLowerCase())
            )
        )
    }

    const filteredData = filterData(filter, search)


    return (
        <div style={{width: "70%", margin: "0 auto", marginTop: 20}}>
            <input type="text" placeholder="search for a news" onChange={(e) => onChangeInput(e)}/>
            <select name="" id="" style={{marginLeft: 5}} onChange={ (e) => setFilter(e.currentTarget.value)}>
                <option value="title">by title</option>
                <option value="description">by description</option>
            </select>
            {filteredData?.map((item: Article) => (
                <NewsItem item={item} key={item.publishedAt}/>
            ))}
           <div style={{display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 40}}>
               <button style={{fontSize: 24, background: "rgba(34,132,234,0.71)", color: "white"}} onClick={() => setItemsCount((prev) => prev + 10)}>
                   Load More
               </button>
           </div>
        </div>
    );
};
// NOTE: OLD IMPLEMENTATION WITH AXIOS
// const [news, setNews] = useState<ServerResponse>()
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState(false)
// const [itemsCount, setItemsCount] = useState(10)
//
// async function fetchNews() {
//     const response: AxiosResponse<ServerResponse> = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=${itemsCount}&apiKey=c8e2c2fd02db4618853590ef8e92c64c`)
//     setNews(response.data)
//     setLoading(false)
// }
//
// useEffect(() => {
//     fetchNews().catch(() => setError(true))
// }, [itemsCount])


export default NewsSection;