import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ChatInput from "./chat-input";
import ChatLog from "./chat-log";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatCard = () => {
  return (
    <Card className="w-full h-full flex flex-col rounded-3xl border-0">
      <CardContent className="flex-grow overflow-auto p-0 m-0">
        <ScrollArea className="h-full w-full border-0 p-2 sm:p-4 xl:p-6 m-0">
          <ChatLog />
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-row justify-start items-center p-2 sm:p-4 xl:p-6 pt-0 sm:pt-0 xl:pt-0 gap-2 md:gap-4">
        <ChatInput />
      </CardFooter>
    </Card>
  );
};

export default ChatCard;
