import { Post } from "../../types";

interface Props {
  post: Post;
}

const ArticleItem = ({ post }: Props) => {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-16"
    >
      <div className="flex flex-col">
        <p className="italic mb-1">
          {post.section}, {post.date}
        </p>
        <h6 className="text-xl font-semibold mb-3">{post.title}</h6>
        <p>{post.content}</p>
      </div>

      <div className="min-w-44 w-60">
        <img src={post.imgLink} alt={`Ilustrasi-${post.title}`} />
      </div>
    </a>
  );
};

export default ArticleItem;
