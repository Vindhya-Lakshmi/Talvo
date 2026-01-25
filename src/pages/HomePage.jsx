import { Link } from "react-router"
import {ArrowRightIcon, CheckIcon, SparklesIcon, VideoIcon, ZapIcon} from "lucide-react"
import {SignInButton} from "@clerk/clerk-react"


function HomePage() {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* NAVBAR */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top z-50 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to = {"/"}
        className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
          <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent 
          flex items-center justify-center shawdow-lg">
            <SparklesIcon className="size-6 text-white"/>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary 
            to-accent bg-clip-text text-transparent font-mono tracking-wider"> Talent IQ</span> 
            <span className="text-xs text-base-content/60 font-medium -ml-1"> Code Together</span>
          </div>

        </Link>

        {/* Auth btn */}
        <SignInButton mode="modal">
          <button className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl 
          text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all
          duration-200 hover:scale-105 flex items-center gap-2">
            <span>Get Started</span>
            <ArrowRightIcon className="size-4 group-hover:translate-x-0.5"/>
          </button>
        </SignInButton>
        
      </div>
      </nav>
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* LEFT CONTENT */}
           <div className="space-y-8">
            <div className="badge badge-primary badge-lg">
              <ZapIcon className="size-4"/>
              Real-time collaboration
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text
              text-transparent">Code Together,</span>
              <br />
              <span className="text-base-content">Learn Together</span>
            </h1>
            <p className="text-xl text-base-content/70 leading-elaxed max-w-xl">
            The ultimate platform for collaboration coding interviews and pair programming.
            Connect face-to-face, code in real-time, and ace your technical interview.</p>
            
            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-lg badge-outline">
                <CheckIcon className="size-4 text-success"/>
                Code Editor
              </div>
              <div className="badge badge-lg badge-outline">
                <CheckIcon className="size-4 text-success"/>
                Multi Language
              </div>
              <div className="badge badge-lg badge-outline">
                <CheckIcon className="size-4 text-success"/>
                Live video chat
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg">
                  Start coding now
                    <ArrowRightIcon className="size-5"/>
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-lg">
                <VideoIcon className="size-5"/>
                Watch demo
              </button>
            </div>

            {/* STATS */}
            <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shawdow-lg">
              <div className="stat">
                <div className="stat-value text-primary">10k</div>
                <div className="stat-title">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value text-secondary">20k</div>
                <div className="stat-title">sessions</div>
              </div>
              <div className="stat">
                <div className="stat-value text-accent">99</div>
                <div className="stat-title">Uptime</div>
              </div>
            </div>
           </div>

          {/*  */}
        </div>
      </div>
       
    </div>
  )
}

export default HomePage
