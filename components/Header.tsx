import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            className="rounded-full"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGE}`}
            layout="fill"
          />
        </div>
        <div className="text-left lg:text-center col-span-4">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the Metaverse</h1>
          <h2 className="truncate text-5xl font-bold">{user?.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
