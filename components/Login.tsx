import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col space-y-4 absolute z-50 h-4/5 items-center justify-center w-full">
        <Image
          className="object-cover rounded-full"
          src={`${process.env.NEXT_PUBLIC_IMAGE}`}
          width={200}
          height={200}
        />
        <button
          onClick={() => authenticate()}
          className="bg-pink-600 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Login;
