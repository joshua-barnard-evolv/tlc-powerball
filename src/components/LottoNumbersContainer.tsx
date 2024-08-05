import * as React from 'react';
import { Grid } from '@mui/material';
import LottoNumber from './LottoNumber';

type Props = {
    primaryNumbers: number[];
    secondaryNumbers: number[];
};

const LottoNumbersContainer = (props: Props) => {
    const { primaryNumbers, secondaryNumbers } = props;

    return (
        <Grid container flexWrap="nowrap" justifyContent="center" gap={0.5}>
            {primaryNumbers.map((number, index) => (
                <LottoNumber key={`primary-${index}-${number}`} label={number}/>
            ))}
            {secondaryNumbers.map((number, index) => (
                <LottoNumber key={`secondary-${index}-${number}`} label={number} isPowerball/>
            ))}
        </Grid>
    );
};

export default LottoNumbersContainer;