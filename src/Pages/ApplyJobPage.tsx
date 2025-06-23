import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const jobId = searchParams.get('id') || '1';
    const fromPage = searchParams.get('from') || 'find-jobs';
    
    // Determine the back link based on where the user came from
    const backLink = fromPage === 'jobs' ? `/jobs?id=${jobId}` : '/find-jobs';
    
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-4 inline-block" to={backLink}>
                <Button leftSection={<IconArrowLeft/>} color='bright-sun.4' variant='light'>Back</Button>
            </Link>
            {/* Rest of your apply job form */}
            <ApplyJobComp/>
        </div>
    );
} 
export default ApplyJobPage;