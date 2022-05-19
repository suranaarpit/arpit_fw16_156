import { UseTimeOut } from "../Hooks/useTimeOut";

export const TOF = () => {
  const ready = UseTimeOut(5000);

  if (!ready) {
    return (
      <h1 className="w-fit m-auto p-[20px] font-bold text-[25px] mt-[230px]">
        Waiting...
      </h1>
    );
  }

  return (
    <div className="w-fit m-auto p-5 mt-[230px]">
      <h1 className="font-bold text-[red] p-2 text-[25px]">HELLO👋 WORLD</h1>
    </div>
  );
};
