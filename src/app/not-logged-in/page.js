import { LoginButton } from "@/components/LoginButton";

export default function NotLoggedIn() {
  return (
    <>
      <p>You are not logged in, Please log in to vote</p>
      <LoginButton />
    </>
  );
}
