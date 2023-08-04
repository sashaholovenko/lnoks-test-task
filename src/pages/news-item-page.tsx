import {useAppSelector} from "../hooks/redux.ts";

const NewsItemPage = () => {

    const {count} = useAppSelector(state => state.newsReducer)


    return (
        <div style={{width: "80%", margin: "0 auto"}}>
            <h1>{count}</h1>
            <h1 style={{fontSize: 40}}>Item page</h1>
            <p style={{fontSize: 20}}>This page was created to show skills with React Router. Here should be an information about particular news item, but the problem is that given API doesn't give ID for each news item, and there is no ability to make findOne() request to API. Although I could make a function that will add ID to data that I receive from API, but it's quite bad practice to handle such hard operations even with useMemo(), and it's a bad practice at all. Also here should be normal id from API, but given API doesn't give it, so handling such routes is impossible in right way</p>
        </div>
    );
};

export default NewsItemPage;