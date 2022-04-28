import React, {useState} from 'react';
import { userActions } from '@/modules/auth/register'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
const theme = createTheme();

// component(react) 는 무상태, 상태는 모두 부모인 page(next) 로 간다.
export function Register({onChange, onSubmit}){
  return (
    <ThemeProvider theme={theme}>
    <Head>
    <title>사용자| 회원가입</title>
    </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                <TextField
                  autoComplete="given-name"
                  name="userid"
                  required
                  fullWidth
                  id="userid"
                  label="user id"
                  autoFocus
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  autoComplete="new-password"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email address"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="name"
                  type="name"
                  id="name"
                  autoComplete="name"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="birth"
                  label="birth"
                  type="birth"
                  id="birth"
                  autoComplete="birth"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="address"
                  type="address"
                  id="address"
                  autoComplete="address"
                  onChange={onChange}

                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              전 송
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  로그인 화면으로 전환
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}