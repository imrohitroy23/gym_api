import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = ({setProgress}) => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
     
      <HeroBanner />
      <SearchExercises setProgress={setProgress} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} setProgress={setProgress} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
