import * as React from 'react';
import {Grid, Typography} from "@mui/material";
import AutofillButton from "./buttons/AutofillButton";
import ClearButton from "./buttons/ClearButton";
import DrawNumber from "./DrawNumber";
import {useState} from "react";
import {fetchLottoResults} from "../shared/api";
import strings from "../shared/strings";

type Props = {};

const GameCard = (props: Props) => {
    // TODO is there a better way to handle the state of the numbers?
    const [primaryNumbersDraw, setPrimaryNumbersDraw] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
    const [secondaryNumbersDraw, setSecondaryNumbersDraw] = useState<number[]>([0]);
// TODO solve for one powerball number vs unknown array
    const getLatestDrawNumbers = async () => {
        // TODO this function doesn't seem right
        const latestDrawNumbers = await fetchLottoResults().then((data) => {
            if (data.DrawResults) {
                setPrimaryNumbersDraw(data.DrawResults[0].PrimaryNumbers);
                setSecondaryNumbersDraw([data.DrawResults[0].SecondaryNumbers[0]]);
            }
        });
    }

    const clearNumbers = () => {
        setPrimaryNumbersDraw([0, 0, 0, 0, 0, 0, 0]);
        setSecondaryNumbersDraw([0]);
    }

    const isInDraw = (number: number, drawNumbers: number[]) => {
        return drawNumbers.includes(number);
    }

    const primaryNumbers = Array.from({length: 35}, (_, i) => i + 1);
    const secondaryNumbers = Array.from({length: 20}, (_, i) => i + 1);

    return (
        <Grid container wrap="nowrap">
            <Grid container>
                <Grid container>
                    {primaryNumbersDraw.map((number, index) => {
                            return (
                                <Grid item key={index}>
                                    <DrawNumber number={number}/>
                                </Grid>
                            );
                        }
                    )}
                    {secondaryNumbersDraw.map((number, index) => {
                            return (
                                <Grid item key={index}>
                                    <DrawNumber number={number} isPowerBall/>
                                </Grid>
                            );
                        }
                    )}
                </Grid>
                {/*TODO Is there a way to not duplicate code to show both sets of numbers?*/}
                <Grid
                    container
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(10, 1fr)',
                    }}
                >
                    {primaryNumbers.map((number, index) => {
                            const inDraw = isInDraw(number, primaryNumbersDraw);
                            return (
                                <Grid item key={index}>
                                    <DrawNumber number={number} inDraw={inDraw}/>
                                </Grid>
                            );
                        }
                    )}
                </Grid>
                <Typography variant="h6">{strings.message}</Typography>
                <Grid
                    container
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(10, 1fr)',
                    }}
                >
                    {secondaryNumbers.map((number, index) => {
                        const inDraw = isInDraw(number, primaryNumbersDraw);
                        return (
                                <Grid item key={index}>
                                    <DrawNumber number={number} inDraw={inDraw}/>
                                </Grid>
                            );
                        }
                    )}
                </Grid>
            </Grid>
            <Grid container>
                <AutofillButton onClick={getLatestDrawNumbers}/>
                <ClearButton onClick={clearNumbers}/>
            </Grid>
        </Grid>
    );
};

export default GameCard;