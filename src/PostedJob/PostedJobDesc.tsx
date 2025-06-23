import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () =>{
    return(
       <div className="mt-5 w-3/4 px-5">
<div className="text-2xl font-semibold flex items-center"> Software Engineer<Badge variant="filled" ml={"sm"} color="orange" size="sm">Badge</Badge> </div>
<div className="font-medium text-mine-shaft-300 mb-5 ">New York , United States</div>
<div>
    <Tabs variant="outline" radius={"lg"} defaultValue="overview">
      <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="overview">OverView</Tabs.Tab>
        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
        <Tabs.Tab value="invited">Invited</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="overview" className="[&>div]:w-full">
         <JobDesc jobId="1" edit/>
      </Tabs.Panel>
      <Tabs.Panel value="applicants">
      <div className="flex mt-10 flex-wrap gap-5">
        {
          talents.map((talent, index) =>index<6 && (
            <TalentCard key={index} {...talent} posted/>
        ))}
      </div>
      </Tabs.Panel>
      <Tabs.Panel value="invited">
        <div className="flex mt-10 flex-wrap gap-4 justify-around">
        {
          talents.map((talent, index) =>index<6 && (
            <TalentCard key={index} {...talent} invited/>
        ))}
      </div>
      </Tabs.Panel>
    </Tabs>
</div>

       </div>
    )
}
export default PostedJobDesc;