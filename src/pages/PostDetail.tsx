import { useEffect, useState } from 'react';
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkSquareAlt,
  FaGithub,
} from 'react-icons/fa';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import { IPost, postApi } from '../api/post.api';
import SocialInfo from '../components/SocialInfo';
import { AnchorBase, LinkBase } from '../components/base/Link';

export default function PostDetail() {
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
          <AnchorBase href={post.html_url}>
            Ver no Github
            <FaExternalLinkSquareAlt />
          </AnchorBase>
        </header>
        <h1 className="text-base-title font-bold text-2xl leading-text mt-5">
          {post.title}
        </h1>
        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <SocialInfo icon={<FaGithub />} info={post.user?.login} />
          <SocialInfo icon={<FaCalendarDay />} info={String(post.created_at)} />
          <SocialInfo
            icon={<FaComment />}
            info={`${post.comments} comentários`}
          />
        </div>
      </div>
      <Markdown
        className="px-8 py-10 text-white"
        rehypePlugins={[rehypeRaw]}
        children={post.body}
      />
    </div>
  );
}
