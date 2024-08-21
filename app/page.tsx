import ChatCard from "./components/chat-card";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#EFF6FC] flex flex-row justify-center items-start p-4 md:p-6 lg:p-8">
      <section className="w-full h-full lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <ChatCard />
      </section>
    </main>
  );
}
