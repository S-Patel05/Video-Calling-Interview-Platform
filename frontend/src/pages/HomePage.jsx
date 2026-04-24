import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import React from "react";
import toast from "react-hot-toast";

function Homepage() {
  return (
    <div>
      <button className="btn btn-secondary" onClick ={() => toast.error('This is a success toast ')}>Cleck me</button>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <UserButton />
    </div>
  );
}

export default Homepage;
