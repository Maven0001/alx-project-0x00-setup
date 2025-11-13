import { Button } from "@/interfaces";

export const ButtonSm: React.FC<Button> = ({ title }) => {
  return (
    <div>
      <button className="text-sm rounded-sm">Click Me</button>
    </div>
  );
};

export const ButtonLg: React.FC<Button> = ({ title }) => {
  return (
    <div>
      <button className="text-lg rounded-lg">Click Me</button>
    </div>
  );
};

export const ButtonFull: React.FC<Button> = ({ title }) => {
  return (
    <div>
      <button className="text-lg rounded-full">Click Me</button>
    </div>
  );
};
