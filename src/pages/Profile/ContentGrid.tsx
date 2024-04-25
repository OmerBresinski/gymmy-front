import { motion } from "framer-motion";

export const ContentGrid = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-start overflow-y-scroll pb-3 max-h-[calc(100vh-276px)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {CONTENT.map((content, index) => (
        <div key={index}>
          <video
            preload="metadata"
            onClick={(e) => {
              e.currentTarget.paused
                ? e.currentTarget.play()
                : e.currentTarget.pause();
            }}
            src={content}
            className="w-32 rounded-md"
          ></video>
        </div>
      ))}
    </motion.div>
  );
};

const CONTENT = [
  "https://utfs.io/f/ba45b3d0-b1ac-4fc8-b10f-4bf523a0ead8-5m1xd8.mp4",
  "https://utfs.io/f/ea6cf0ca-a18c-438a-b6de-76ea3ca24b55-y4jdjg.mp4",
  "https://utfs.io/f/252a3c6a-e83b-4a00-84d2-cc77619be659-hv69q8.24.mp4",
  "https://utfs.io/f/4e17193a-71db-40d8-9311-d601204c7330-5m1xcd.mp4",
  "https://utfs.io/f/a4610a9e-3eee-4ea9-bab1-d792f03669a4-5m1xbi.mp4",
  "https://utfs.io/f/ba45b3d0-b1ac-4fc8-b10f-4bf523a0ead8-5m1xd8.mp4",
  "https://utfs.io/f/ea6cf0ca-a18c-438a-b6de-76ea3ca24b55-y4jdjg.mp4",
  "https://utfs.io/f/252a3c6a-e83b-4a00-84d2-cc77619be659-hv69q8.24.mp4",
  "https://utfs.io/f/4e17193a-71db-40d8-9311-d601204c7330-5m1xcd.mp4",
  "https://utfs.io/f/a4610a9e-3eee-4ea9-bab1-d792f03669a4-5m1xbi.mp4",
  "https://utfs.io/f/ba45b3d0-b1ac-4fc8-b10f-4bf523a0ead8-5m1xd8.mp4",
  "https://utfs.io/f/ea6cf0ca-a18c-438a-b6de-76ea3ca24b55-y4jdjg.mp4",
  "https://utfs.io/f/252a3c6a-e83b-4a00-84d2-cc77619be659-hv69q8.24.mp4",
  "https://utfs.io/f/4e17193a-71db-40d8-9311-d601204c7330-5m1xcd.mp4",
  "https://utfs.io/f/a4610a9e-3eee-4ea9-bab1-d792f03669a4-5m1xbi.mp4",
];
