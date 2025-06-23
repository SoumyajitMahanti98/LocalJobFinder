import { useState } from "react";
import ExpInput from "./ExpInput";

const ExpCard = (props: any) => {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7 w-7 object-contain"
              src={`/Icons/${props.company.replace(/\s+/g, "")}.png`}
              alt={props.company}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/Icons/Microsoft.png"; // Fallback image
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{props.title}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &bull; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          {props.duration || `${props.startDate} - ${props.endDate}`}
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>
      {props.edit && (
        <div>
          <button
            onClick={() => setEdit(true)}
            className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded mr-2"
          >
            Edit
          </button>
          <button className="border border-red-800 text-red-800 px-4 py-1 rounded">
            Delete
          </button>
        </div>
      )}
    </div>
  ) : (
    <ExpInput setEdit={setEdit} />
  );
};
export default ExpCard;
