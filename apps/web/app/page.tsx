import { trpc } from "./trpc";

import ClientSide from "./ClientSide";

export default async function Home() {
  const response = await trpc.hello.query({});
  return (
    <div>
      <div>Server Side: {response}</div>
      <ClientSide />
    </div>
  );
}
