import React from 'react';
import ProgressBar from '@/components/about-comps/ProgressBar';

const Skills = () => {
  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];


  return (
    <div>
      Skills
      <div>
        <h1>Skills</h1>
        {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      </div>
    </div>
  )
}

export default Skills