import React from 'react'

const OutputPanel = ({output}) => {
  console.log("llllllllll",output);
  
  return (
    <div className='h-full bg-base-100 flex flex-col'>
      <div className='px-4 py-2 bg-base-200 border-base-300 font-semibold text-sm'>
        Output
      </div>
      <div className='flex-1 overflow-auto p-4'>
        {output === null ? (
          <p className='text-base-content/50 text-sm'>
            Click "Run Code" to see the output here...
          </p>
        ): output.success ? (
          <pre className='text-sm font-mono text-success whitespace-pre-wrap'>
            {output.output}
          </pre>
        ) : (
        <div>
          {output.output && (
            <pre className='text-sm font-mono text-base-content whitespace mb-2'>
              {output.output}
            </pre>
          )}
        </div>
        )}
      </div>
    </div>
  )
}

export default OutputPanel
