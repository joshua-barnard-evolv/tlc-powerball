import * as React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { colors } from '../../shared/constants';

type Props = {
    onClick: () => void;
    disabled?: boolean;
};

const ClearButton = (props: Props) => {
    const { onClick, disabled } = props;

    return (
        <IconButton
            sx={{
                backgroundColor: colors.grey,
                color: colors.white,
                "&:hover": {
                    backgroundColor: colors.grey + '90',
                },
            }}
            onClick={onClick}
            disabled={disabled}
        >
            <DeleteIcon/>
        </IconButton>
    );
};

export default ClearButton;