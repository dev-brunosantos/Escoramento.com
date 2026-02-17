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
} from "@mui/material";

import {
  Download,
} from "@mui/icons-material";

import { green, grey } from "@mui/material/colors";

export const ClientTable = () => {
  return (
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
  );
};