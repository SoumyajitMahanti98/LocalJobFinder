import { Divider } from "@mantine/core";
import Profile from "../Profile/ProfileComponent";
import ProfileComponent from "../Profile/ProfileComponent";
import { profileData } from "../Data/profileData";

const ProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] flex justify-start items-start">
      <Divider mx={"md"} mb={"xl"} />
      <Profile {...profileData} />
      <Divider mx={"md"} mb={"xl"} />
    </div>
  );
};
export default ProfilePage;
