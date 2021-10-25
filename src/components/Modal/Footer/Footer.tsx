import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';

import { Button } from './Button.styled';
import { Anchor } from './Anchor.styled';
import { ActionsFooter } from './ActionsFooter.styled';

interface FormProps {
    button: string;
    anchor: string;
}

const Footer: FC = ({ button, anchor }: FormProps) => (
    <Box component="footer" sx={{ mt: 2, width: '100%' }}>
        <Grid container spacing={0.5}>
            <Grid item xs={4} />
            <Grid item xs={8}>
                <ActionsFooter>
                    <Box component="div">
                        <Anchor href="/">{anchor}</Anchor>
                    </Box>
                    <Box component="div">
                        <Button>{button}</Button>
                    </Box>
                </ActionsFooter>
            </Grid>
        </Grid>
    </Box>
);

export default Footer;
