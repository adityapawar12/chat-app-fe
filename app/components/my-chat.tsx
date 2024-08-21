import { Card, CardContent } from "@/components/ui/card";

interface Props {
  chatMessage: string;
}

const MyChat = ({ chatMessage }: Props) => {
  return (
    <Card className="w-fit px-4 py-2 rounded-xl rounded-br-none text-base bg-[#6E00FF] text-white">
      <CardContent className="p-0 m-0">
        <p>{chatMessage}</p>
      </CardContent>
    </Card>
  );
};

export default MyChat;
