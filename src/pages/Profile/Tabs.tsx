import { GridIcon, ClipboardIcon } from "@radix-ui/react-icons";

interface TabsProps {
  onTabClick: (tabIndex: number) => void;
  activeTabIndex: number;
}

export const Tabs = ({ onTabClick, activeTabIndex }: TabsProps) => {
  const activeTabClass = `flex pb-3 justify-center w-full border-gray-400 border-b-2 box-border transition ease-in-out`;
  const inactiveTabClass = `flex pb-3 justify-center w-full border-gray-100 border-b-2 box-border transition ease-in-out`;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full justify-between mt-4">
        <div
          onClick={() => onTabClick(0)}
          className={activeTabIndex === 0 ? activeTabClass : inactiveTabClass}
        >
          <GridIcon />
        </div>
        <div
          onClick={() => onTabClick(1)}
          className={activeTabIndex === 1 ? activeTabClass : inactiveTabClass}
        >
          <ClipboardIcon />
        </div>
      </div>
      {activeTabIndex === 0 && <div>No content yet - Grid</div>}
      {activeTabIndex === 1 && (
        <div>
          <div>No content yet - Workouts</div>
        </div>
      )}
    </div>
  );
};
