import * as React from 'react';
import Chip from '@mui/material/Chip';
import { colors, strings } from '../shared/constants';

type Props = {
    label: number;
    isPowerball?: boolean;
};

const LottoNumber = (props: Props) => {
    const { label, isPowerball } = props;

    const getLabel = () => {
        if (isPowerball && !label) {
            return strings.powerBallInitials;
        }

        return label > 0 ? label : '';
    };

    return (
        <Chip
            label={getLabel()}
            variant="outlined"
            sx={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 100,
                backgroundColor: isPowerball && label ? colors.grey : !isPowerball && label ? colors.blue : 'transparent',
                color: isPowerball && !label ? colors.black : colors.white,
                '& .MuiChip-label': {
                    padding: 0
                }
            }}
        />
    );
};

export default LottoNumber;