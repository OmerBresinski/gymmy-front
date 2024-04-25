import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";

export const TopSection = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-1">
      <div className="px-4 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <Avatar className="h-16 w-16 border-2 border-gray-200 box-border">
            <AvatarImage src={user?.imageUrl} />
          </Avatar>
          <p className="text-sm font-medium">{user?.fullName}</p>
        </div>
        <div className="flex gap-3 mr-4">
          <div className="flex flex-col items-center min-w-16">
            <p className="text-base font-semibold">5</p>
            <p className="text-sm">Posts</p>
          </div>
          <div className="flex flex-col items-center min-w-16">
            <p className="text-base font-semibold">12</p>
            <p className="text-sm">Followers</p>
          </div>
          <div className="flex flex-col items-center min-w-16">
            <p className="text-base font-semibold">0</p>
            <p className="text-sm">Following</p>
          </div>
        </div>
      </div>
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
  );
};
