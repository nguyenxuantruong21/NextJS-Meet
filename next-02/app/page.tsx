import ClientComponents from "@/components/client";
import ServerComponents from "@/components/server";

export default function Home() {
  return (
    <div>
      <ClientComponents>
        <ServerComponents />
      </ClientComponents>
    </div>
  );
}
