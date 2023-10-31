import { FocusEvent, useContext, useEffect, useState } from 'react';
import {
  FaBuilding,
  FaExternalLinkSquareAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa';
import { IPost, postApi } from '../api/post.api';
import CardPost from '../components/CardPost';
import SocialInfo from '../components/SocialInfo';
import { InputBase } from '../components/base/Input';
import { AnchorBase } from '../components/base/Link';
import { UserContext } from '../contexts/UserContext';

export default function Home() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState<IPost[]>([]);
  const quantPosts = posts.length;

  useEffect(() => {
    postApi
      .find()
      .then(({ data }) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  async function handleSearchPost(ev: FocusEvent<HTMLInputElement>) {
    const { value } = ev.target;

    try {
      const { data, status } = await postApi.search(value);
      if (status !== 200)
        throw new Error(
          'Falha no servidor, por favor tente novamente mais tarde'
        );
      setPosts(data.items);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {/* Intro */}
      <div className="flex items-center px-10 py-8 w-full bg-base-profile rounded-[10px] gap-8">
        <img src={user.avatar_url} alt="" className="rounded-lg w-36 h-36" />
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-base-title font-bold text-2xl leading-text">
              {user.name}
            </h1>
            <AnchorBase href={user.html_url}>
              Github
              <FaExternalLinkSquareAlt />
            </AnchorBase>
          </div>

          {/* Bio */}
          <p className="mt-2 text-base-text text-base leading-text">
            {user.bio}
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <SocialInfo icon={<FaGithub />} info={user.login} />
            <SocialInfo icon={<FaBuilding />} info={String(user.company)} />
            <SocialInfo
              icon={<FaUserFriends />}
              info={`${user.followers} seguidores`}
            />
          </div>
        </div>
      </div>

      {/* Search Form */}
      <form action="post" className="mt-[4.5rem]">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start leading-text">
            <label
              htmlFor="search"
              className="text-base-subtitle font-bold text-lg"
            >
              Publicações
            </label>
            <span className="text-base-span text-sm">
              {quantPosts} publicações
            </span>
          </div>
          <InputBase
            id="search"
            placeholder="Buscar conteúdo"
            onBlur={handleSearchPost}
          />
        </div>
      </form>

      {/* List Post */}
      <div className="flex flex-wrap gap-8 mt-12">
        {posts.map((post) => (
          <CardPost key={post.number} data={post} />
        ))}
      </div>
    </div>
  );
}
