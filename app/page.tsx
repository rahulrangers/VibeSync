"use client"; // Mark this component as a client-side component

import { Appbar } from "../Components/Appbar";
import { useSession } from "next-auth/react";

export default function Home() {
  // Call useSession hook to get session data
  const session = useSession();

  return (
    <div>
      <Appbar />
      {/* Check if session exists and display user information */}
      {session.data ? JSON.stringify(session.data.user) : "Not signed in"}
    </div>
  );
}
