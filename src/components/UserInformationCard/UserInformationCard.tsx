import Link from "next/link";
import Image from "next/image";
import React from "react";
const UserInformationCard = () => {
  return (
    <section className="flex flex-col text-sm font-medium">
      <div className="flex justify-between">
        <span>User Information</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>

      <div></div>

      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quas
        eos repellat itaque commodi sapiente dicta accusamus corrupti quidem
        molestias velit veritatis quis sed laudantium veniam quasi ab,
        aspernatur consectetur.
      </p>

      <div className="flex gap-2 justify-start">
        <Image src="/map.png" alt="location" height={16} width={16} />
      </div>
      <div className="flex gap-2 justify-start">
        <Image src="/school.png" alt="school" height={16} width={16} />
      </div>
      <div className="flex gap-2 justify-start">
        <Image src="/work.png" alt="work place" height={16} width={16} />
      </div>
    </section>
  );
};

export default UserInformationCard;
