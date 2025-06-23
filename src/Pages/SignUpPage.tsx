import { IconAnchor } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import LogIn from "../SignUpLogin/LogIn";
import { useLocation } from "react-router-dom";


const SignUpPage = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";
  
  return (
    <div className="h-screen bg-mine-shaft-950 font-['poppins'] overflow-hidden ">
      <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${isSignUpPage ? '-translate-x-1/2' : 'translate-x-0'}`}>
        {!isSignUpPage && <LogIn/>}
        <div className="w-1/2 h-full rounded-r-[200px] bg-mine-shaft-900 flex gap-5 items-center  justify-center flex-col">
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAnchor className="h-16 w-16 stroke={2.5}" />
            <div className="text-6xl font-bold font-semibold">LocalHireX</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">Find the Job Made For You
            
          </div>
        </div>
        {isSignUpPage && <SignUp/>}
      </div>
    </div>
  );
};

export default SignUpPage;
