import { Card, CardContent } from "@/components/ui/card";

interface Props {
  chatMessage: string;
}
const OthersChat = ({ chatMessage }: Props) => {
  return (
    <Card className="w-fit px-4 py-2 rounded-xl rounded-bl-none text-base bg-[#E7E7E7] text-[#303030]">
      <CardContent className="p-0 m-0">
        <p>{chatMessage}</p>
      </CardContent>
    </Card>
  );
};

export default OthersChat;
