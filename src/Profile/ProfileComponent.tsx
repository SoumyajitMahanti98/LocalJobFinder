import {
  ActionIcon,
  Button,
  Divider,
  Select,
  TagsInput,
  Textarea,
} from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
} from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useState } from "react";
import SelectInput from "../PostJob/SelectInput";
import { fields } from "../Data/PostJob";
import { skills } from "../Data/JobDescData";

const ProfileComponent = (props: any) => {
  const select = fields;
  const [skills, setSkills] = useState(props.skills);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(props.about);
  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  return (
    <div className="w-4/5 mx-auto mt-2  bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden ">
      {/* Banner & Avatar */}
      <div className="relative">
        <img
          className="w-full h-64 object-cover rounded-t-2xl"
          src="/Profile/banner.jpg"
          alt="Banner"
        />
        <img
          className="w-36 h-36 rounded-full border-4 border-white absolute -bottom-16 left-6 shadow-md"
          src="/avatar.png"
          alt="Avatar"
        />
      </div>

      <div className="pt-20 px-4">
        {/* Name & Button */}
        <div className="text-2xl font-semibold flex justify-between items-center">
          {props.name}
          <ActionIcon
            onClick={() => handleEdit(0)}
            size={"lg"}
            variant="subtle"
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
            ) : (
              <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </div>

        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-base text-gray-700 dark:text-gray-300 flex items-center gap-2 mt-1">
              <IconBriefcase size={18} /> {props.role} • {props.company}
            </div>
            <div className="text-base text-gray-500 flex items-center gap-2 mt-1">
              <IconMapPin size={18} /> {props.location}
            </div>
          </>
        )}
      </div>

      <Divider mx="xs" size="xs" my="xl" />

      {/* About */}
      <div className="px-4">
        <h2 className="text-2xl font-semibold mb-3 flex justify-between">
          About{" "}
          <ActionIcon
            onClick={() => handleEdit(1)}
            size={"lg"}
            variant="subtle"
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
            ) : (
              <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </h2>
        {edit[1] ? (
          <Textarea
            value={about}
            autosize
            minRows={3}
            placeholder="Write something about yourself..."
            onChange={(event) => setAbout(event.target.value)}
          />
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
            {about}
          </p>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      {/* Skills */}
      <div className="px-4">
        <h2 className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            onClick={() => handleEdit(2)}
            size={"lg"}
            variant="subtle"
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
            ) : (
              <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </h2>
        {edit[2] ? (
          <TagsInput
            value={skills}
            onChange={setSkills}
            placeholder="Add skills"
            splitChars={[",", " ", "|"]}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills?.length > 0 ? (
              skills.map((skill: any, index: number) => (
                <div
                  key={index}
                  className="bg-yellow-200/20 text-yellow-500 text-sm font-medium rounded-full px-3 py-1"
                >
                  {skill}
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-400">No skills listed</div>
            )}
          </div>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      {/* Experience */}
      <div className="px-4">
        <h2 className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <ActionIcon
            onClick={() => handleEdit(3)}
            size={"lg"}
            variant="subtle"
          >
            {edit[3] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
            ) : (
              <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </h2>
        <div className="flex flex-col gap-6">
          {props.experience?.length > 0 ? (
            props.experience.map((exp: any, index: number) => (
              <ExpCard key={index} {...exp} edit={edit[3]} />
            ))
          ) : (
            <div className="text-sm text-gray-400">No experience listed</div>
          )}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      {/* Certifications */}
      <div className="px-4 pb-8">
        <h2 className="text-2xl font-semibold mb-5 flex justify-between">
          Certifications{" "}
          <ActionIcon
            onClick={() => handleEdit(4)}
            size={"lg"}
            variant="subtle"
          >
            {edit[4] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5 text-bright-sun-400" />
            ) : (
              <IconPencil className="h-4/5 w-4/5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </h2>
        <div className="flex flex-col gap-6">
          {props.certifications?.length > 0 ? (
            props.certifications.map((certi: any, index: number) => (
              <CertiCard key={index} edit={edit[4]} {...certi} />
            ))
          ) : (
            <div className="text-sm text-gray-400">
              No certifications listed
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
