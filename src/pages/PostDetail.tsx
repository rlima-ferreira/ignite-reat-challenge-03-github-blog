import { useContext, useEffect, useState } from 'react';
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkSquareAlt,
  FaGithub,
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { IPost, postApi } from '../api/post.api';
import SocialInfo from '../components/SocialInfo';
import { AnchorBase, LinkBase } from '../components/base/Link';
import { UserContext } from '../contexts/UserContext';

export default function PostDetail() {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [post, setPost] = useState<IPost>({} as IPost);

  useEffect(() => {
    if (id !== undefined) {
      postApi.findOne(+id).then(({ data }) => setPost(data));
    }
  }, [id]);

  return (
    <div>
      {/* Intro */}
      <div className="flex flex-col px-10 py-8 w-full bg-base-profile rounded-[10px]">
        {/* Header */}
        <header className="flex items-center justify-between uppercase">
          <LinkBase to={'..'}>
            <FaChevronLeft />
            Voltar
          </LinkBase>
          <AnchorBase href={user.html_url}>
            Ver no Github
            <FaExternalLinkSquareAlt />
          </AnchorBase>
        </header>
        <h1 className="text-base-title font-bold text-2xl leading-text mt-5">
          {post.title}
        </h1>
        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <SocialInfo icon={<FaGithub />} info={user.login} />
          <SocialInfo icon={<FaCalendarDay />} info={String(user.company)} />
          <SocialInfo
            icon={<FaComment />}
            info={`${user.followers} comentários`}
          />
        </div>
      </div>
      <main className="px-8 py-10"></main>
    </div>
  );
}
