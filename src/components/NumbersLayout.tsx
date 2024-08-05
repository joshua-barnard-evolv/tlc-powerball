import * as React from 'react';
import { Grid } from '@mui/material';
import NumberCell from './NumberCell';
import { generateArray, isInDraw } from '../shared/utils';

type Props = {
    size: number;
    drawNumbers: number[];
};

const NumbersLayout = (props: Props) => {
    const { size, drawNumbers } = props;
    const numbers = generateArray(size);

    return (
        <Grid
            container
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
            }}
        >
            {numbers.map((number) => {
                const inDraw = isInDraw(number, drawNumbers);

                return (
                    <Grid item key={number}>
                        <NumberCell number={number} inDraw={inDraw}/>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default NumbersLayout;