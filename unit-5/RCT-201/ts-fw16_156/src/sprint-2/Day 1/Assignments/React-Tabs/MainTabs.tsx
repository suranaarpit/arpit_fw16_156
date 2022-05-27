import ReactTabs from "../React-Tabs/ReactTabs";

const MainTabs = () => {
  const data = [
    {
      tab: "Tab 1",
      panel: "1️⃣",
    },
    {
      tab: "Tab 2",
      panel: "2️⃣",
    },
    {
      tab: "Tab 3",
      panel: "3️⃣",
    },
  ];
  return (
    <div className="mt-[100px]">
      <ReactTabs data={data} />
    </div>
  );
};

export default MainTabs;
