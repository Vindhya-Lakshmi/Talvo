import {getDifficultyBadgeClass} from '../lib/utills'

function ProblemDescription({problem, currentProblemId, onProblemChange, allProblems})  {
  return (
    <div className='h-full overflow-y-auto bg-base-200'>
      {/* head section */}
      <div className='p-6 bg-base-100 border-b border-base-300'>
        <h1 className='text-3xl font-bold text--base-content'>{Problem.title}</h1>
        <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
          {problem.difficulty}
        </span>
      </div>
        
    </div>
  )
}

export default ProblemDescription
