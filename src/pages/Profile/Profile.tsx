import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { TopSection } from "./TopSection";

export const Profile = () => {
  return (
    <>
      <SignedIn>
        <div className="flex flex-col gap-1">
          <TopSection />
          <div className="flex p-2 gap-2">
            <Button
              onClick={console.log}
              className="w-full"
              size="sm"
              variant="secondary"
            >
              <p className="text-sm font-semibold">Edit Profile</p>
            </Button>
            <Button
              onClick={console.log}
              className="w-full"
              size="sm"
              variant="secondary"
            >
              <p className="text-sm font-semibold">Share Profile</p>
            </Button>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <div>Please sign in</div>
      </SignedOut>
    </>
  );
};
