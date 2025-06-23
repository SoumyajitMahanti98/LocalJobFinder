import { Select, TextInput } from "@mantine/core";
import SelectInput from "../PostJob/SelectInput";
import { fields } from "../Data/PostJob";

const CertiInput = (props: any) => {
  const Select = fields;
  return (
    <div className="flex flex-col gap-3">
      <TextInput label="title" withAsterisk placeholder="enter title" />
      <SelectInput {...Select[1]} />
    </div>
  );
};
export default CertiInput;
