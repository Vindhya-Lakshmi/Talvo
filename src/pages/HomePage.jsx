import { SignedOut, SignOutButton, SignedIn, UserButton, SignInButton } from '@clerk/clerk-react'
import React from 'react'
import toast from 'react-hot-toast'

function HomePage() {
  return (
    <div>
      <button className='btn btn-secondary'
      onClick={() => toast.error("This is a success toast")}>ClickMe</button>

      <SignedOut>
        <SignInButton mode="modal">
            <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton />
    </div>
  )
}

export default HomePage
