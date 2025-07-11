import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from "dompurify";

const JobDesc = (props: any) => {
    const data = DOMPurify.sanitize(desc);
    return(
        <div className="w-2/3">
              <div className="flex justify-between mb-3">
                <div className="flex gap-2 items-center"> 
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14 " src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className="font-semibold text-2xl">Software Engineer III</div>
                        <div className="text-lg text-mine0shaft-300">Google &bull; 3 days ago &bull; 48  Applicants</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to={`/apply-job?id=${props.jobId}&from=jobs`}>
                            <Button color="bright-sun.4" size="sm" variant="filled">{props.edit?"Edit":"Apply"}</Button>
                       </Link>         
                {props.edit?<Button color="red.5" size="sm" variant="outline">Delete</Button>:<IconBookmark className="text-bright-sun-400 cursor-pointer" stroke={1.5}/> }      
                </div>
              
            </div>
     <Divider  my="xl"/>
     <div className="flex gap-4 justify-between">
        {
            card.map((item:any, index:any) => (
                <div key={index} className="flex flex-col items-center gap-1">
                    <ActionIcon color="bright-sun.4" className="!h-12 !w-12" variant="light" radius={"xl"} aria-label="Settings">
                        {item.icon && <item.icon className="h-4/5 w-4/5" stroke={1.5}/>}
                    </ActionIcon>
                    <div className="text-sm text-mine-shaft-300">{item.name}</div>
                    <div className="font-semibold">{item.value}</div>   
                </div>
            ))
        }   
     </div>
      <Divider  my={"xl"} />
      <div>
            <div className="text-xl font-semibold mb-5">Required Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((item:string, index:number)=>(
                         <ActionIcon key={index} p={"xs"} color="bright-sun.4" className="!h-fit font-medium !text-sm !w-fit" variant="light" radius={"xl"} aria-label="Settings">
                       {item}
                    </ActionIcon>
                    ))
                }
            </div>
        </div> 
         <Divider  my={"xl"} />
         <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1  [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_.section-gap]:py-6 [&_p]:text-justify " dangerouslySetInnerHTML={{ __html: data }}>
            
         </div>
             <Divider  my={"xl"} />
             <div>
            <div className="text-xl font-semibold mb-5">About Company</div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center"> 
                        <div className="p-3 bg-mine-shaft-800 rounded-xl flex items-center justify-center">
                            <img className="h-8 w-auto" src="/Icons/Google.png" alt="Google Logo" />
                        </div>
                        <div className='flex flex-col'>
                            <div className="font-medium text-lg">Google</div>
                            <div className="text-mine-shaft-300">10k+ Employees</div>
                        </div>
                    </div>
                    <div>
                        <Link to={"/company"}>
                            <Button color="bright-sun.4" variant="filled">Company Page</Button>
                        </Link>              
                    </div> 
                </div>
                <div className="text-mine-shaft-300 mt-2 text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, cumque repellendus ut soluta blanditiis exercitationem laboriosam tenetur nisi iure, asperiores perspiciatis corporis nemo nam quidem voluptate laudantium quae aspernatur mollitia dolores sequi aliquam. Et numquam tenetur possimus facilis commodi. Nostrum!
                </div>   
            </div>
        </div>
 </div>
    )
}
export default JobDesc;