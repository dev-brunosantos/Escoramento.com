'use client'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Divider
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import { useLogin } from '@/src/contexts/LoginContext'

export const PerfilDetails = () => {

  const { user } = useLogin();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Meus Dados
          </Typography>

          <Grid container spacing={4}>
            {/* Avatar */}
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <Avatar
                src={user?.image ?? ""}
                alt="Usuário"
                sx={{
                  width: 220,
                  height: 220,
                  borderRadius: 4,
                  boxShadow: 3
                }}
              />
            </Grid>

            {/* Formulário */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nome"
                    defaultValue={user?.name}
                    value={user?.name}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="ID do usuário"
                    defaultValue={user?.id}
                    value={user?.id}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="CPF / CNPJ"
                    defaultValue={user?.document}
                    value={user?.document}
                    // value={user?.document}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Data de Nascimento"
                    defaultValue={user?.birthDate}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Data de Cadastro"
                    defaultValue="2026-02-17"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Segunda seção */}
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>
            Outros Dados
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                defaultValue="brunodesenvolvedor@gmail.com"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Senha"
                type="password"
                defaultValue="1234"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField select fullWidth label="Cargo" defaultValue="ADMIN">
                <MenuItem value="ADMIN">Administrador</MenuItem>
                <MenuItem value="CLIENT">Cliente</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}
