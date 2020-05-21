import React from 'react';
import { Chip } from '@material-ui/core';
import IStyledFilledChipButtonProps from '../models/props/components/IStyledFilledChipButtonProps'
const StyledFilledChipButton = (props: IStyledFilledChipButtonProps) => {
    const title = props.title
    const background = props.background
    return (
        <Chip
            {...props}
            style={{
                background: background,
                color: 'white',
                width: 300,
                height: 50,
                borderRadius: 25,
                borderWidth: 3,
                fontSize: 25
            }}
            label={title} />);
}
export default StyledFilledChipButton;