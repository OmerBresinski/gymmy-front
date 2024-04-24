import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

function App() {
  const { user } = useUser();
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              layout: {
                shimmer: true,
              },
            }}
          />
        </SignedIn>
      </header>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1>gymmy</h1>
        {user && <h3>Hello {user.fullName}</h3>}
        <div className="card">
          <Button
            className="w-36"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
