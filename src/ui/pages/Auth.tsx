import { useForm, SubmitHandler } from "react-hook-form";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Copyright from 'components/Copyright/Copyright';
import * as React from 'react';



  
interface FormInput {
    email: String;
    password: String | Number;
}

const Auth: React.FunctionComponent = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = data => alert(JSON.stringify(data));

    // const handleSubmit_old = ( event: React.FormEvent<HTMLFormElement> ) => {
    //     event.preventDefault();
    //     const data = new FormData( event.currentTarget );
    //     console.log( {
    //         email: data.get( 'email' ),
    //         password: data.get( 'password' ),
    //     } );
    // };

    return (
        <Container component='section' maxWidth='xs'>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                } }>
                <Avatar sx={ { m: 1, color: 'secondary.main' } }>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Вход в личный кабинет
                </Typography>
                <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={ { 
                    mt: 1,
                    marginBottom: '50px'
                } }>
                    { errors.email? 
                        <TextField
                            error
                            margin='normal'
                            type='email'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            autoComplete='email'
                            autoFocus
                            {...register("email",{pattern: /^\S+@\S+$/i})}
                        />

                        :
                        
                        <TextField
                            margin='normal'
                            type='email'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            autoComplete='email'
                            autoFocus
                            {...register("email",{pattern: /^\S+@\S+$/i})}
                        />
                    }
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        {...register("password")}
                    />
                    <Button type='submit' key='Enter' fullWidth variant='contained' color="primary" sx={ { mt: 3, mb: 2 } }>
                        Вход
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='#' variant='body2'>
                                { 'Don\'t have an account? Sign Up' }
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Auth;
