"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";

import {
  ExitToApp
} from "@mui/icons-material";

import { green, grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { MenuClient } from "./components/MenuClient";
import { ClientTable } from "./components/ClientTable";
import { useLogin } from "@/src/contexts/LoginContext";
import { RoleGuard } from "@/src/components/RoleGuard";

const drawerWidth = 260;

export default function ClientPage() {

  const router = useRouter();

  const { logout } = useLogin();

  return (
    <RoleGuard allowedRole="CLIENT">
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: grey[100] }}>
        <CssBaseline />

        <MenuClient />

        {/* Content */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* Topbar */}
          <AppBar
            position="static"
            elevation={0}
            sx={{ bgcolor: "#fff", color: grey[700] }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">Cliente</Typography>
              <Box>
                <Button
                  variant="contained"
                  endIcon={<ExitToApp />}
                  className="bg-green-700!"
                  onClick={logout}
                >
                  Sair
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          <Box sx={{ p: 4 }}>
            {/* Cards resumo */}
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
          </Box>
        </Box>
      </Box>
    </RoleGuard>
  );
}
