

import React from 'react'

const ResumeDescription = ( {params}:{params: {resumeTitle:string}} ) => {
  return (
    <div>
      <h1>ResumeDescription</h1>
      <h1>{params.resumeTitle}</h1>
    </div>
  )
}

export default ResumeDescription