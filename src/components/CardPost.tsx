import { Link } from 'react-router-dom';
import { IPost } from '../api/post.api';

interface IProps {
  data: IPost;
}

export default function CardPost({ data }: IProps) {
  return (
    <Link to={`/${data.number}`}>
      <div className="w-[26rem] h-[16.25rem] rounded-[0.625rem] p-8 bg-base-post">
        <header className="flex justify-between items-start">
          <h1 className="text-base-title font-bold leading-text text-xl">
            {data.title}
          </h1>
          <span className="text-base-span text-sm">{data.created_at}</span>
        </header>
        <p className="mt-5 text-base-text text-base leading-text line-clamp-4">
          {data.body}
        </p>
      </div>
    </Link>
  );
}
