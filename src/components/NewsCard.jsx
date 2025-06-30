
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="card bg-base-200 mb-4 shadow-xl border">
      <div className="flex items-center gap-3 p-4 border-b">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              src={news.author?.img}
              alt={news.author?.name}
            />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-sm">{news.title}</h2>
          <p className="text-xs text-gray-500">
            {news.author?.published_date || "No Date"}
          </p>
        </div>
      </div>

      <div className="px-4 pt-4">
        <h2 className="font-bold text-lg mb-2">
          {news.details}
        </h2>
      </div>

      <figure>
        <img
          src={news.thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-60  object-cover" />
      </figure>

      <div className="p-4">
        <p className="text-sm text-gray-700 mb-2"></p>
        <Link to={`/news/${news._id}`} className="text-blue-600 font-semibold cursor-pointer">Read More</Link>
      </div>

      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-2 font-medium">
            {news.rating?.number}
          </span>
        </div>

        <div className="flex items-center text-gray-600 gap-1">
          <FaEye />
          <span className="font-medium">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;



