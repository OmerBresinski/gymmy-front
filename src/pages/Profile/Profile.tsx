import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

export const Profile = () => {
  const { user } = useUser();
  return (
    <>
      <SignedIn>
        <div>Hello {user?.fullName}</div>
      </SignedIn>
      <SignedOut>
        <div>Please sign in</div>
      </SignedOut>
    </>
  );
};
