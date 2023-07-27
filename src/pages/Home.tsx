import { useEffect, useState } from 'react';
import { IPost, postApi } from '../api/post.api';
import CardPost from '../components/CardPost';
import Intro from '../components/Intro';

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    postApi.find().then(({ data }) => setPosts(data as IPost[]));
  }, []);

  return (
    <div>
      <Intro data={{ title: 'Teste', description: 'Lorem Ipsum' }} />
      {/* Search Form */}
      {/* List Post */}
      <div className="grid col-auto gap-8">
        {posts.map((post) => (
          <CardPost key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}
