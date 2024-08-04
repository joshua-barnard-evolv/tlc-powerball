import * as React from 'react';

import strings from '../shared/strings';
import {IconButton} from "@mui/material";

type Props = {
    number: number;
    isPowerBall?: boolean;
    inDraw?: boolean;
};

// TODO Should I separate DrawNumber from the drawn numbers at the top?
const DrawNumber = (props: Props) => {
    const { number, isPowerBall, inDraw } = props;

    return (
        <IconButton
            // disabled
            sx={{
                border: '1px solid #000',
                backgroundColor: inDraw ? '#FFD600' : '#fff',
            }}
        >
            {isPowerBall && !number ? strings.powerBallInitials : number}
        </IconButton>
    );
};

export default DrawNumber;