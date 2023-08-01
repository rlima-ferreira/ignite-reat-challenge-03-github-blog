/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

interface IProps {
  icon: ReactNode;
  info: string;
}

export default function SocialInfo(props: IProps) {
  return (
    <p className="flex gap-2 items-center text-base-subtitle text-sm leading-text">
      <span className="text-base-label text-sm">{props.icon}</span>
      {props.info}
    </p>
  );
}
