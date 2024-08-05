import React from 'react';
import './App.css';
import GameCard from './components/GameCard';
import { Grid } from '@mui/material';

function App() {
    return (
        <Grid container>
            <GameCard></GameCard>
        </Grid>
    );
}

export default App;
