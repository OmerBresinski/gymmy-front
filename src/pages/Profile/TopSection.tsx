import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/clerk-react";

export const TopSection = () => {
  const { user } = useUser();

  return (
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
  );
};
