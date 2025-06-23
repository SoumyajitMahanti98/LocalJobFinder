import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJob from "../JobDesc/RecommendedJob";


const JobDescPage = () => {
    const location = useLocation();
    const jobId = new URLSearchParams(location.search).get('id') || '1';
    
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            {/* <Divider  size={"xs"} />  */}
             <Link className="my-4 inline-block" to="/find-jobs">
                <Button leftSection={<IconArrowLeft/>} color='bright-sun.4' variant='light'>Back</Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <JobDesc jobId={jobId} />
                <RecommendedJob />
            </div>
        </div>
    );
}
export default JobDescPage;