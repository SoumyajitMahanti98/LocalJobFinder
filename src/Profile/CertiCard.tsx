import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const CertiCard = (props: any) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img
            className="h-7 w-7 object-contain"
            src={`/Icons/${props.issuer.replace(/\s+/g, "")}.png`}
            alt={props.issuer}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/Icons/Microsoft.png";
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">{props.title || props.name}</div>
          <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-300">
            {props.issueDate || props.date}
          </div>
          <div className="text-sm text-mine-shaft-300">
            {props.certificateId}
          </div>
        </div>

        {/* Move ActionIcon outside flex-col */}
        {props.edit && (
          <ActionIcon
            size={"lg"}
            color="red.8"
            variant="subtle"
            className="self-start"
          >
            <IconTrash className="w-4 h-4" stroke={1.5} />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};

export default CertiCard;
