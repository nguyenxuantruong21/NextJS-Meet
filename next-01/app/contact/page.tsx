import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="px-72 pt-20 flex flex-col gap-4 cursor-pointer">
      <div className="flex gap-10 items-center justify-start pb-10">
        <div className="w-32 h-32 relative rounded-full">
          <Image
            className="object-cover rounded-full overflow-hidden"
            src={"/avatar.jpg"}
            alt="avatar"
            fill
          />
        </div>
        <div className="text-3xl font-bold italic">Nguyen Xuan Truong</div>
      </div>
      <div className=" flex gap-6">
        <div className="text-xl font-bold">Email:</div>
        <div>xuantruong200101@gmail.com</div>
      </div>
      <div className=" flex gap-6">
        <div className="text-xl font-bold">Phone:</div>
        <div>+84 335265010</div>
      </div>
      <div className=" flex gap-6">
        <div className="text-xl font-bold">Descriptions:</div>
        <div className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          autem quia laborum qui facere doloribus, necessitatibus libero omnis.
          Corporis quis harum delectus sunt numquam distinctio eligendi, est
          dolores placeat quo.
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
