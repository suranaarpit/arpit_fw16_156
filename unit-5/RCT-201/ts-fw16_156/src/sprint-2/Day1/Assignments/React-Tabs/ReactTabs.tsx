import { useState } from "react";
import "./tab.css";
type TabElement = { tab: string; panel: string };

type TabType = {
  data: TabElement[];
};

const ReactTabs = ({ data }: TabType) => {
  const [opened, setOpened] = useState<number>(0);
  const handleOpen = (index: number) => {
    setOpened(index);
  };
  return (
    <div className="tabContainer">
      {data.map((el, index) => (
        <Tab
          key={index}
          handleOpen={handleOpen}
          isVisible={index === opened}
          title={el.tab}
          desc={el.panel}
          index={index}
        />
      ))}
    </div>
  );
};
type TabProps = {
  title: string;
  desc: string;
  index: number;
  isVisible: boolean;
  handleOpen: (i: number) => void;
};

const Tab = ({ title, desc, isVisible, handleOpen, index }: TabProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="tabs">
        <h4
          id="tabId"
          className={isVisible ? `active` : ""}
          onClick={() => handleOpen(index)}
        >
          {title}
        </h4>
      </div>
      {isVisible && <p className="text-[darkblue] m-auto">{desc}</p>}
    </div>
  );
};
export default ReactTabs;
