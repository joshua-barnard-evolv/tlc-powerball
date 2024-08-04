import * as React from 'react';
import {Icon, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
    onClick: () => void;
};

const ClearButton = (props: Props) => {
    const { onClick } = props;

    return (
        <IconButton
            sx={{
                backgroundColor: '#757575',
                color: '#fff',
            }}
            onClick={onClick}
        >
            <DeleteIcon />
        </IconButton>
    );
};

export default ClearButton;