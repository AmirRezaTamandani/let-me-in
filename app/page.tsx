import LoginButton from "@/components/auth/Login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center 
      h-full
    "
    >
      <div className="space-y-6 text-center">
        <h1
          className="text-6xl font-semibold 
                     drop-shadow-md"
        >
          Auth me up !
        </h1>
        <p className="text-lg">Let me get in</p>
      </div>
      <LoginButton>
        <Button variant="secondary" size="lg">
          Login
        </Button>
      </LoginButton>
    </main>
  );
}
