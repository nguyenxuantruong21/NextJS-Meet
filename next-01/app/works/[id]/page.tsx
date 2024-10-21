import Image from "next/image";

const WorkDetail = () => {
  return (
    <div className="px-72 w-full">
      <div className="text-3xl font-bold">
        Designing Dashboards with usability in mind
      </div>
      <div className="flex gap-3 mt-6">
        <button className="px-4 bg-red-400 text-white rounded-xl">2020</button>
        <span className="text-zinc-600">Dashboard, User Experence Design</span>
      </div>
      <div className="mt-6 text-zinc-600 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium
        placeat atque facere temporibus delectus! Dolor soluta sed repellat,
        reiciendis aperiam esse. Tempore sunt tenetur pariatur sint nemo rerum
        laudantium.
      </div>
      <div className="flex items-center justify-center">
        <div className="w-fit relative rounded-md mt-6">
          <Image
            className="object-cover rounded-md"
            src={"/w1.png"}
            alt="avatar"
            height={600}
            width={600}
          />
        </div>
      </div>
      <div className="mt-6 text-zinc-600 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        quo architecto aspernatur blanditiis suscipit temporibus rerum nulla? Ab
        magni, vel hic ex et tempora modi labore sit eius at inventore.
      </div>
      <div className="flex items-center justify-center">
        <div className="w-fit relative rounded-md mt-6">
          <Image
            className="object-cover rounded-md"
            src={"/w2.png"}
            alt="avatar"
            height={600}
            width={600}
          />
        </div>
      </div>
      <div className="mt-6 text-zinc-600 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        quo architecto aspernatur blanditiis suscipit temporibus rerum nulla? Ab
        magni, vel hic ex et tempora modi labore sit eius at inventore.
      </div>
      <div className="flex items-center justify-center">
        <div className="w-fit relative rounded-md mt-6">
          <Image
            className="object-cover rounded-md"
            src={"/w3.png"}
            alt="avatar"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
