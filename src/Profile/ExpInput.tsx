import { Anchor, Checkbox, Select, Textarea } from "@mantine/core";
import SelectInput from "../PostJob/SelectInput";
import { fields } from "../Data/PostJob";
import { desc } from "../Data/JobDescData";
import { useState } from "react";
import { MonthPicker, MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const Select = fields;
  const [desc, setDesc] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Edit Experience</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...Select[0]} />
        <SelectInput {...Select[1]} />
      </div>
      <SelectInput {...Select[2]} />
      <Textarea
        withAsterisk
        label="Summary"
        value={desc}
        placeholder="enter summary..."
        autosize
        minRows={3}
        onChange={(event) => setDesc(event.currentTarget.value)}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          maxDate={endDate || undefined}
          label="start date"
          placeholder="pick date"
          value={startDate}
          onChange={(value) => setStartDate(value ? new Date(value) : null)}
        />
        <MonthPickerInput
          disabled={checked}
          withAsterisk
          maxDate={new Date()}
          minDate={startDate || undefined}
          label="end date"
          placeholder="pick date"
          value={endDate}
          onChange={(value) => setEndDate(value ? new Date(value) : null)}
        />
      </div>
      <Checkbox
        autoContrast
        label="currently working here"
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.currentTarget) {
            setChecked(event.currentTarget.checked);
          }
        }}
      />
      <div>
        <button
          onClick={() => props.setEdit(false)}
          className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded mr-2"
        >
          save
        </button>
        <button
          onClick={() => props.setEdit(false)}
          className="border border-red-800 text-red-800 px-4 py-1 rounded"
        >
          cancel
        </button>
      </div>
    </div>
  );
};
export default ExpInput;
