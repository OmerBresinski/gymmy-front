import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

function App() {
  const { user } = useUser();

  return (
    <div className="bg-[#fefcfb]">
      <header className="h-12 p-2 box-border flex justify-between w-full">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="min-w-1">
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
                        height: "0px",
                        width: "0px",
                        // height: "46px",
                        // width: "46px",
                      },
                    },
                  }}
                />
                <p className="text-xl tracking-tight font-semibold">
                  @{user.emailAddresses[0].emailAddress.split("@")[0]}
                </p>
              </motion.div>
            )}
          </SignedIn>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "linear" }}
          src="https://utfs.io/f/17cae57e-20ee-44be-8384-d6aae3065132-6uok6k.png"
          alt="logo"
          className="w-11 h-11"
        />
      </header>
      <motion.div
        className="p-2 w-full h-[calc(100vh-48px)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "linear" }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

export default App;
