import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { IPost, postApi } from '../api/post.api';
import CardPost from '../components/CardPost';
import Github from './../assets/github-logo.svg';

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const quantPosts = posts.length;

  useEffect(() => {
    postApi.find().then(({ data }) => setPosts(data as IPost[]));
  }, []);

  return (
    <div>
      {/* Intro */}
      <div className="flex items-center px-10 py-8 w-full bg-base-profile rounded-[10px] gap-8">
        <img
          src="https://github.com/rlima-ferreira.png?size=200"
          alt=""
          className="rounded-lg w-36 h-36"
        />
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-base-title font-bold text-2xl leading-text">
              Teste
            </h1>
            <a
              href="http://"
              className="flex items-center gap-2 text-sky-500 leading-text text-xs uppercase font-bold"
            >
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>

          {/* Bio */}
          <p className="mt-2 text-base-text text-base leading-text">
            Lorem Ipsum
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <span className="flex gap-2 items-center text-base-subtitle text-sm leading-text">
              <img
                src={Github}
                className="text-base-label w-[0.875rem] h-[0.875rem]"
              />
              rlima-ferreira
            </span>
            <span className="flex gap-2 items-center text-base-subtitle text-sm leading-text">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-base-label text-sm"
              />
              UFRJ
            </span>
            <span className="flex gap-2 items-center text-base-subtitle text-base leading-text">
              <FontAwesomeIcon
                icon={faUserGroup}
                className="text-base-label text-sm"
              />
              32 seguidores
            </span>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <form action="" className="mt-[4.5rem]">
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
          <input
            type="search"
            id="search"
            className="w-full px-3 py-4 rounded-lg active:text-base-text bg-base-input placeholder:text-base-label active:border-sky-500"
            placeholder="Buscar conteúdo"
          />
        </div>
      </form>

      {/* List Post */}
      <div className="flex flex-wrap gap-8 mt-12">
        {posts.map((post) => (
          <CardPost key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}
