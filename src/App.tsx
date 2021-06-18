import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Box } from '@material-ui/core';
import Appbar from './features/appbar/Appbar';
import { blueGrey, grey } from '@material-ui/core/colors';
import Board from './features/board/Board';

const App = ({children, ...props}: any) => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Appbar></Appbar>
      <Box
      bgcolor={blueGrey[800]}
      height="100%"
      >
        <Board></Board>
      </Box>
    </Box>
  );
}

export default App;
