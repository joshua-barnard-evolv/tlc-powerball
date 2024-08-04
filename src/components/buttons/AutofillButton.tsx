import * as React from 'react';
import {IconButton} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

type Props = {
    onClick: () => void;
};

const AutofillButton = (props: Props) => {
    const { onClick } = props;

    return (
        <IconButton
            sx={{
                backgroundColor: '#6C4398',
                color: '#fff',
            }}
            onClick={onClick}
        >
            <BoltIcon />
        </IconButton>
    );
};

export default AutofillButton;