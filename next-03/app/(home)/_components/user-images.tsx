import Image from "next/image";

const UserImage = () => {
  return (
    <div className="w-60 h-60 relative border-4 rounded-full border-slate-300">
      <Image
        className="rounded-full object-cover"
        src="/avatar.jpg"
        alt="avatar"
        fill
      />
    </div>
  );
};

export default UserImage;
