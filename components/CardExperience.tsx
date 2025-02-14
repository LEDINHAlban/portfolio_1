import Image from "next/image";
import React from "react";

type Experience = {
  company: string;
  role: string;
  date: string;
  description: string[];
  logo: { path: string; width: number; height: number };
  stacks: string[];
};

function CardExperience({ data }: { data: Experience }) {
  return (
    <article className="bg-[#282828] rounded-lg shadow-lg p-5">
      <div className="flex justify-center items-center mt-5 ">
        <Image
          src={data.logo.path}
          height={data.logo.height}
          width={data.logo.width}
          alt={"compagny logo"}
        />
      </div>
      <div className="flex flex-col space-y-1 mt-5">
        <h3 className="text-4xl font-light textColor">{data.company}</h3>
        <p className="font-bold text-2xl textColor">{data.role}</p>
        <div className="flex space-x-2">
          {data.stacks.map((stack) => (
            <Image key={stack} src={stack} height={40} width={40} alt={stack} />
          ))}
        </div>
      </div>

      <p className="mt-7 uppercase text-sm textColor">{data.date}</p>
      <ul className="pl-4 space-y-4 text-sm mt-3 list-disc textColor">
        {data.description.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
    </article>
  );
}

export default CardExperience;
