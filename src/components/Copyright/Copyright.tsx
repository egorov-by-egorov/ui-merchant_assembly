import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright: FC = () => {
    return (
        <>
            <Typography variant="body1" color="textSecondary" align="center">
                Бесплатный звонок:
            </Typography>

            <Typography variant="h6" color="textPrimary" align="center">
                <Link color="inherit" href="tel:+78007557551" underline="none">
                    8 (800) 755 755 1
                </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                © { <Link color="inherit" target={ '_blank' } href="https://iml.ru/">
                IML
            </Link> }, 2007 - { new Date().getFullYear() }.
            </Typography>
        </>
    ); 
}

export default Copyright