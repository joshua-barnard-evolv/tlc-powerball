import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import AutofillButton from './buttons/AutofillButton';
import ClearButton from './buttons/ClearButton';
import { useState } from 'react';
import { fetchLottoResults } from '../shared/api';
import { colors, powerballNumbers, strings } from '../shared/constants';
import NumbersLayout from './NumbersLayout';
import LottoNumbersContainer from './LottoNumbersContainer';


const GameCard = () => {
    const [primaryNumbersDraw, setPrimaryNumbersDraw] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
    const [secondaryNumbersDraw, setSecondaryNumbersDraw] = useState<number[]>([0]);
    const [disabled, setDisabled] = useState<boolean>(true);

    const getLatestDrawNumbers = async () => {
        await fetchLottoResults({
            CompanyId: 'GoldenCasket',
            MaxDrawCountPerProduct: 1,
            OptionalProductFilter: ['Powerball']
        }).then((data) => {
            if (data) {
                setPrimaryNumbersDraw(data.PrimaryNumbers);
                setSecondaryNumbersDraw(data.SecondaryNumbers);
                setDisabled(false);
            }
        });
    };

    const clearNumbers = () => {
        setPrimaryNumbersDraw([0, 0, 0, 0, 0, 0, 0]);
        setSecondaryNumbersDraw([0]);
        setDisabled(true);
    };

    return (
        <Grid container wrap="nowrap" sx={{ padding: 1}}>
            <Grid container flexDirection="column">
                <Grid item sx={{padding: 1}}>
                    <LottoNumbersContainer
                        primaryNumbers={primaryNumbersDraw}
                        secondaryNumbers={secondaryNumbersDraw}
                    />
                </Grid>
                <NumbersLayout
                    key={1}
                    size={powerballNumbers.primary}
                    drawNumbers={primaryNumbersDraw}
                />
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        backgroundColor: colors.grey,
                        color: colors.white,
                        fontSize: '12px',
                        fontWeight: '600',
                        padding: 0.5,
                        textAlign: 'center',
                    }}
                >
                    {strings.message}
                </Typography>
                <NumbersLayout
                    key={2}
                    size={powerballNumbers.secondary}
                    drawNumbers={secondaryNumbersDraw}
                />
            </Grid>
            <Grid container sx={{ alignItems: 'flex-start', gap: 1, padding: 1 }}>
                <AutofillButton onClick={getLatestDrawNumbers}/>
                <ClearButton onClick={clearNumbers} disabled={disabled}/>
            </Grid>
        </Grid>
    );
};

export default GameCard;