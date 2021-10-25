import React, { useState, FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    FilledInput,
    FormControl,
    FormGroup,
    IconButton,
    InputAdornment,
    InputLabel,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Footer from '../Footer/Footer';

interface State {
    showPassword: boolean;
    email: string;
    password: string;
}

const Form: FC = () => {
    const [values, setValues] = useState<State>({
        showPassword: false,
        password: '',
        email: '',
    });

    const [errors, setErros] = useState<{ error: string }>();

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setErros({ error: '' });
            setValues({ ...values, [prop]: event.target.value });
            const reg: RegExp = new RegExp(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );

            const test: boolean = reg.test(values.email);

            if (!test) {
                setErros({ error: 'Only email are permitted' });
            }
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submit');
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <FormGroup>
                <FormControl sx={{ mt: 3, width: '100%' }}>
                    <TextField
                        fullWidth
                        id="filled-basic"
                        label="Email"
                        variant="filled"
                        onChange={handleChange('email')}
                        value={values.email}
                        required
                        error={Boolean(errors?.error)}
                        helperText={errors?.error}
                    />
                </FormControl>
                <FormControl variant="filled" sx={{ mt: 3, width: '100%' }}>
                    <InputLabel htmlFor="filled-adornment-password">
                        Password
                    </InputLabel>
                    <FilledInput
                        required
                        fullWidth
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </FormGroup>
            <Footer />
        </Box>
    );
};

export default Form;
