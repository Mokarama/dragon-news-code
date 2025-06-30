import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
// import { FaLongArrowAltLeft } from "react-icons/fa";



const DetailsCard = () => {
    const data =useLoaderData() || {};
    const news =data.data[0];
    // console.log(news)
    return (
      <div>
        <h2 className="font-semibold mb-3">Dragon News</h2>

        <div className="card bg-base-100  shadow-sm">
          <figure className="px-3 pt-3">
            <img
              src={news.image_url}
              alt="news"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">{news.title}</h2>
            <p className="font-semibold py-3">{news.details}</p>
            <div className="card-actions">
              <Link to={`/category/${news?.category_id}`} className="btn bg-[#ee4545e1] text-white"><FaLongArrowAltLeft></FaLongArrowAltLeft> Back to category id</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;