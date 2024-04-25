import { useState } from "react";
import { Tabs } from "./Tabs";
import { TopSection } from "./TopSection";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export const Profile = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <>
      <SignedIn>
        <TopSection />
        <Tabs activeTabIndex={activeTabIndex} onTabClick={handleTabClick} />
      </SignedIn>
      <SignedOut>
        <div>Please sign in</div>
      </SignedOut>
    </>
  );
};
