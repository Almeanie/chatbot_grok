import { GrokChat } from "@/components/grok-chat";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen max-w-2xl mx-auto">
      <div className="p-5 border rounded-lg">
      <GrokChat />
      </div>
    </main>
  );
}
