"use client";

import { useState, useEffect } from "react";
import { trpc } from "./trpc";

export default function ClientSide() {
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    trpc.hello
      .query({ name: "Shahla" })
      .then(setGreeting)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      Client Side: {loading || !greeting.length ? "Loading..." : greeting}
    </div>
  );
}
