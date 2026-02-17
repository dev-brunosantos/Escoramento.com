"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import {
  Download,
} from "@mui/icons-material";

import { green, grey } from "@mui/material/colors";

export const ClientTable = () => {
  return (
    <>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: green[700], color: "#fff" }}>
            <CardContent>
              <Typography variant="body2">
                Saldo Atual
              </Typography>
              <Typography variant="h5">
                R$ 5.320,00
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color={grey[600]}>
                Faturas Pendentes
              </Typography>
              <Typography variant="h5">2</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color={grey[600]}>
                Último Acesso
              </Typography>
              <Typography variant="h6">
                20/04/2024
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Documentos */}
      <Card>
        <CardContent>
          <Typography variant="h6" mb={2}>
            Documentos Recentes
          </Typography>

          <ClientTable />
        </CardContent>
      </Card>

      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Documento</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Data</TableCell>
              <TableCell align="right">Ação</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Contrato de Serviço</TableCell>
              <TableCell>Termo de adesão</TableCell>
              <TableCell>10/04/2024</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<Download />}
                  className="bg-green-700! hover:bg-green-900!"
                >
                  Baixar
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Fatura Março 2024</TableCell>
              <TableCell>Fatura do mês</TableCell>
              <TableCell>05/04/2024</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<Download />}
                  className="bg-green-700! hover:bg-green-900!"
                >
                  Baixar
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Comprovante</TableCell>
              <TableCell>Recibo de pagamento</TableCell>
              <TableCell>02/04/2024</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<Download />}
                  className="bg-green-700! hover:bg-green-900!"
                >
                  Baixar
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
};