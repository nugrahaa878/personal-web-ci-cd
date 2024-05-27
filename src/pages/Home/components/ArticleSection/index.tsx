import { LIST_POST } from "../../constants";
import ArticleItem from "../ArticleItem";

const ArticleSection = () => {
  return (
    <div className="px-48 py-28">
      <div className="flex gap-6 items-center">
        <h4 className="text-2xl font-semibold">Recently Post</h4>
        <div className="h-0.5 bg-gray-900 w-64 rounded-sm" />
      </div>

      <div className="mt-7">
        {LIST_POST.map((post) => (
          <ArticleItem post={post} key={`${post.title}-${post.date}`} />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
