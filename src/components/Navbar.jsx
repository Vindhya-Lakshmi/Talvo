import {Link} from "react-router-dom"
import {SparklesIcon} from "lucide-react"

function Navbar() {
  return <nav className='bg-base-100/10 backdrop-blur-md border-b border-primary/20 sticky top-0
  z-50 shadow-lg'>

    <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
        {/* LOGO */}
        <Link
        to="/"
        className="group flex items-center gap-3 hover:scale-105 transition-transform duration-200"
        >
            <div className='size-10 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent'>
                <SparklesIcon className="size-6 text-white"/>
            </div>
        </Link>
    </div>
  </nav>

}

export default Navbar
