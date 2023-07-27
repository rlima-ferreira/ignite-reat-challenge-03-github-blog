import { Link } from 'react-router-dom';
import { IPost } from '../api/post.api';

interface IProps {
  data: IPost;
}

export default function CardPost({ data }: IProps) {
  return (
    <Link to={`/details/${data.id}`}>
      <div className="max-w-[26rem] max-h-[16.25rem] rounded-[0.625rem] p-8">
        <header className="flex justify-between">
          <h1>{data.title}</h1>
        </header>
        <p className="mt-5">{data.description}</p>
      </div>
    </Link>
  );
}
