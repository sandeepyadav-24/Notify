import LeftNavbar from "./LeftNavbar";
import InputBar from "./InputBar";
import { useRecoilValue } from "recoil";
import { GeminiOutput } from "../Atom/GeminiOutput";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const AiNote = () => {
  const output = useRecoilValue(GeminiOutput);
  const [isLoading, setIsLoading] = useState(false);
  const defaultText = "How can i help you today?";
  const handleSearch = () => {
    // Set isLoading to true when search is initiated
    setIsLoading(true);

    // Perform search logic here
    // Once response is received, setIsLoading(false) should be called
  };
  useEffect(() => {
    // Set isLoading to false when output is available

    if (output) {
      setIsLoading(false);
    }
  }, [output]);
  return (
    <div className="flex flex-row h-screen">
      <LeftNavbar />
      <div className="flex flex-col w-3/4">
        <div className="   ">
          <InputBar onSearch={handleSearch} />
        </div>
        <div className="mx-20">
          {isLoading ? ( // Render loader when isLoading is true
            <div className="text-center my-40">
              <CircularProgress />
            </div>
          ) : (
            // Render output if available
            <>
              {output && <div>{output}</div>}
              {!output && (
                <div className="text-2xl text-center my-40 font-bold">
                  {defaultText}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default AiNote;
