import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const CustomButton = ({
  disabled,
  isRounded,
}: {
  disabled: boolean;
  isRounded: boolean;
}) => {
  const [] = useState();
  return (
    <>
      <Button
        className={cn(
          "text-sm",
          disabled ? "bg-gray-300" : "bg-blue-300",
          isRounded && "rounded-full"
        )}
      >
        Hello
      </Button>
      {/* <Button
        className={`text-sm ${disabled} ? 'bg-gray-300' : 'bg-blue-300' 
     ${isRounded && "rounded-full"}
    `}
      >
        Hello
      </Button> */}
    </>
  );
};

export default CustomButton;
