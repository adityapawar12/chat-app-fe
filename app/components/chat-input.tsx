import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Send } from "lucide-react";

const ChatInput = () => {
  return (
    <>
      <Input
        className="bg-[#EFF6FC] text-black m-0 px-4 py-4 lg:py-6 rounded-2xl"
        placeholder="Chat..."
      />
      <Button className="bg-[#6E00FF] text-white m-0 px-3 lg:px-4 py-4 lg:py-6 rounded-2xl">
        <Mic />
      </Button>
      <Button className="bg-[#6E00FF] text-white m-0 px-3 lg:px-4 py-4 lg:py-6 rounded-2xl">
        <Send />
      </Button>
    </>
  );
};

export default ChatInput;
