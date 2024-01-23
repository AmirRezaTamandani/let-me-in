import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
const SettingPage = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">sign out</Button>
      </form>
    </div>
  );
};

export default SettingPage;
2.51;
