import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const Categorynews = () => {
    const {data:news}=useLoaderData();
    // console.log(news);

    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
           <p className="text-gray-400 text-sm">{news.length}  News found in this category</p> 
       <div className="">

            {
             news.map(singleNews =><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            }
 
        </div> 

        </div>
    );
};

export default Categorynews;