import { ArrowRightIcon, SparklesIcon, ZapIcon} from "lucide-react"

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* NAVBAR */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top z-50 shadow-lg">
      </nav>
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT  CONTENT */}
          <div className="space-y-8">
            <div className="badge badge-primary badge-lg">
              <ZapIcon className="size-4"/>
              Real-time Collaboration
            </div>
          </div>
        </div>


      </div>
     
    </div>
  )
}

export default HomePage
