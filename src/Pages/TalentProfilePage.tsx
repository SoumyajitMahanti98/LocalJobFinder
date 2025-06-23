import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import RecommendTalent from "../FindTalent/RecommendTalent";
import { profileData } from "../Data/profileData";

const TalentProfilePage = () => {
  // Sample profile data

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      {/* <Divider  size={"xs"} />  */}
      <Link className="my-4 inline-block" to="/find-talent">
        <Button
          leftSection={<IconArrowLeft />}
          color="bright-sun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-5">
        <Profile {...profileData} />
        <RecommendTalent />
      </div>
    </div>
  );
};
export default TalentProfilePage;
