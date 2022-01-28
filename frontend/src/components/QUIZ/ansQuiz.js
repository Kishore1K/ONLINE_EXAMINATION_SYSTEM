import React, { useState } from 'react'

import Start from './Start';
import Quiz from './Quiz';

function QUIZAPP() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
  );
}

export default QUIZAPP;