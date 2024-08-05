import * as React from 'react';
import { IconButton } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import { colors } from '../../shared/constants';

type Props = {
    onClick: () => void;
};

const AutofillButton = (props: Props) => {
    const { onClick } = props;

    return (
        <IconButton
            sx={{
                backgroundColor: colors.purple,
                color: colors.white,
                "&:hover": {
                    backgroundColor: colors.purple + '90',
                },
            }}
            onClick={onClick}
        >
            <BoltIcon/>
        </IconButton>
    );
};

export default AutofillButton;