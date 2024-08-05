import * as React from 'react';

import { colors } from '../shared/constants';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    number: number;
    inDraw?: boolean;
};

const NumberCell = (props: Props) => {
    const { number, inDraw } = props;

    return (
        <Typography
            sx={{
                backgroundColor: inDraw ? colors.purple + '20' : '#fff',
                textAlign: 'center',
                padding: '10px',
                lineHeight: '1',
                position: 'relative',
                color: colors.purple,
                fontWeight: '600',
            }}
        >
            {number}
            {inDraw &&
                <CloseIcon
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        width: '100%',
                        height: '100%',
                        color: colors.purple + '30',
                    }}
                />
            }
        </Typography>
    );
};

export default NumberCell;