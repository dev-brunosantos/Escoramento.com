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
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  Dashboard,
  ExitToApp,
  Person
} from "@mui/icons-material";

import { green, grey } from "@mui/material/colors";
import { MenuClient } from "./components/MenuClient";
import { ClientTable } from "./components/ClientTable";
import { useLogin } from "@/src/contexts/LoginContext";
import { RoleGuard } from "@/src/components/RoleGuard";
import { useRouter, useSearchParams } from "next/navigation";
import { PerfilDetails } from "../PerfilDetails";
import { useMemo } from "react";
import Link from "next/link";

export default function ClientPage() {

  const router = useRouter();
  const { logout } = useLogin();

  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "dashboard";

  const renderContent = () => {
    switch (currentTab) {
      case "":
        return <ClientTable />;
      case "dados":
        return <PerfilDetails />;
      default:
        return <Typography>Bem-vindo ao Painel</Typography>;
    }
  };

  return (
    <RoleGuard allowedRole="CLIENT">
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: grey[100] }}>
        <CssBaseline />

        {/* <MenuClient /> */}

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

            <div className="md:hidden">
              <Divider />

              <Toolbar sx={{ justifyContent: "space-between" }}>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push("/client?tab=dashboard")}>
                      <ListItemIcon sx={{ color: "#bababa" }}>
                        <Dashboard />
                      </ListItemIcon>
                      <ListItemText primary="Dashbord" />
                    </ListItemButton>
                  </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/client?tab=dados")}>
                    <ListItemIcon sx={{ color: "#bababa" }}>
                      <Person />
                    </ListItemIcon>
                    <ListItemText primary="Meus Dados" />
                  </ListItemButton>
                </ListItem>
              </Toolbar>
            </div>
          </AppBar>

          <Box sx={{ p: 4 }}>
            {renderContent()}
          </Box>
        </Box>
      </Box>
    </RoleGuard>
  );
}
