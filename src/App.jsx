
import './App.css'
import { SignedOut, SignOutButton, SignedIn, UserButton, SignInButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1>Welcome to the app</h1>

      <SignedOut >
      <SignInButton mode="modal"/>
    
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
        
    </>
  )
}

export default App
