import React from 'react';
import './App.css';
import GameCard from './components/GameCard';
import {Grid} from "@mui/material";
import AutofillButton from "./components/buttons/AutofillButton";
import ClearButton from "./components/buttons/ClearButton";

function App() {
    return (
        <Grid container>
            <GameCard></GameCard>
        </Grid>
    );
}

export default App;
