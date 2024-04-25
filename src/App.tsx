import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

function App() {
  const { user } = useUser();

  return (
    <>
      <header className="h-12 p-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {user && (
            <motion.div
              className="flex gap-2 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.2, ease: "linear" }}
            >
              <UserButton
                appearance={{
                  layout: {
                    shimmer: true,
                  },
                  elements: {
                    userButtonAvatarBox: {
                      height: "46px",
                      width: "46px",
                    },
                  },
                }}
              />
              <p className="text-s tracking-tight font-medium">
                {user.firstName}
              </p>
            </motion.div>
          )}
        </SignedIn>
      </header>
      <Outlet />
    </>
  );
}

export default App;
