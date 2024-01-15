import React from "react";
import { CardWrapper } from "@/components/auth/CardWrapper";

export const LoginForm = () => {
  return (
    <div>
      <CardWrapper
        headerLabel="welcome"
        backButtonLabel="No account ? Click me"
        backButtonHref="/register"
        showSocial
      >
        LoginForm
      </CardWrapper>
    </div>
  );
};
