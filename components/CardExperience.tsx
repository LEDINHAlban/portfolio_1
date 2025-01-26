import Image from "next/image";
import React from "react";

function CardExperience() {
  return (
    <article className="bg-[#282828]">
      <div className="flex justify-center items-center mt-5">
        <Image
          src="/acheterlouer_logo.png"
          height={100}
          width={100}
          alt={"compagny logo"}
        />
      </div>
      <div className="flex flex-col space-y-1 mt-5">
        <h3 className="text-4xl font-light">Company</h3>
        <p className="font-bold text-2xl">Role</p>
        <div className="flex space-x-2">
          <Image
            src="/stack_logo/react.svg"
            height={40}
            width={40}
            alt={"react"}
          />
          <Image
            src="/stack_logo/vuejs.svg"
            height={40}
            width={40}
            alt={"vuejs"}
          />
        </div>
      </div>

      <p className="mt-7 uppercase text-sm text-gray-300">Duration</p>
      <ul className="pl-4 space-y-4 text-sm mt-3 list-disc">
        <li>first comment fdsqf dsqfqsf sdf fdsqfqs dfqsd fqsfd</li>
        <li>second comment</li>
      </ul>
    </article>
  );
}

export default CardExperience;
