interface IProps {
  data: {
    photo?: string;
    title: string;
    description: string;
  };
}

export default function Intro({ data }: IProps) {
  return (
    <div className="flex items-center px-10 py-8 w-full bg-base-profile rounded-[10px]">
      {data.photo && (
        <img src={data.photo} alt="" className="rounded-lg w-10 h-10" />
      )}
      <div className="flex flex-col">
        <h1 className="text-base-title text-2xl leading-[160%]">
          {data.title}
        </h1>
        <p className="mt-2 text-base-text text-base leading-[160%]">
          {data.description}
        </p>
        <div className="flex gap-6 mt-6"></div>
      </div>
    </div>
  );
}
