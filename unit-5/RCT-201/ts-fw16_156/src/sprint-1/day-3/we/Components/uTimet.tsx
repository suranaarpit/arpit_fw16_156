import { UseTimeout } from "../Hooks/useTo";

export const Uth = () => {
  const toShow = UseTimeout(5);

  if (!toShow) {
    return (
      <div>
        <h1>"Waiting for Timer"</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-[red]">HELLO</h1>
    </div>
  );
};
