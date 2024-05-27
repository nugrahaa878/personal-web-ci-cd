import { Post } from "../../types";

interface Props {
  post: Post;
}

const ArticleItem = ({ post }: Props) => {
  return (
    <div className="flex items-center gap-16">
      <div className="flex flex-col">
        <p className="italic mb-1">
          {post.section}, {post.date}
        </p>
        <h6 className="text-xl font-semibold mb-3">{post.title}</h6>
        <p>{post.content}</p>
      </div>

      <div className="w-4/6 min-w-44">
        <img src={post.imgLink} alt={`Ilustrasi-${post.title}`} />
      </div>
    </div>
  );
};

export default ArticleItem;
