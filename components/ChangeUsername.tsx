import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { user, setUserData, isUserUpdating, userError } = useMoralis();
  const setUserName = () => {
    const username = prompt(`Enter your new username ${user?.getUsername()}`);
    if (!username) return;
    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="hover:text-pink-700"
      >
        Change Your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
