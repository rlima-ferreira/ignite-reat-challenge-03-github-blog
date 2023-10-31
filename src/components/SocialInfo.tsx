/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

interface IProps {
  icon: ReactNode;
  info: string;
}

export default function SocialInfo(props: IProps) {
  return (
    <div className="flex gap-2 items-center text-base-subtitle">
      <span className="text-base-label text-base">{props.icon}</span>
      <p className="text-sm">{props.info}</p>
    </div>
  );
}
