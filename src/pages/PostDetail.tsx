import { useContext } from 'react';
import {
  FaCalendarDay,
  FaComment,
  FaExternalLinkSquareAlt,
  FaGithub,
} from 'react-icons/fa';
import SocialInfo from '../components/SocialInfo';
import { AnchorBase } from '../components/base/Link';
import { UserContext } from '../contexts/UserContext';

export default function PostDetail() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {/* Intro */}
      <div className="flex items-center px-10 py-8 w-full bg-base-profile rounded-[10px] gap-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <AnchorBase href={user.html_url}>
            Github
            <FaExternalLinkSquareAlt />
          </AnchorBase>
        </header>
        <h1 className="text-base-title font-bold text-2xl leading-text">
          Título do post
        </h1>
        <div className="flex-1 flex flex-col">
          {/* Bio */}
          <p className="mt-2 text-base-text text-base leading-text">
            {user.bio}
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <SocialInfo icon={<FaGithub />} info={user.login} />
            <SocialInfo icon={<FaCalendarDay />} info={String(user.company)} />
            <SocialInfo
              icon={<FaComment />}
              info={`${user.followers} seguidores`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
