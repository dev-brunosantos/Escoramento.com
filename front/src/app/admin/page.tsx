"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";

import {
  ExitToApp
} from "@mui/icons-material";

import { grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { Clients, ClientTable } from "./components/ClientTable";
import { ClientFilter } from "./components/ClientFilter";
import { MenuAdmin } from "./components/MenuAdmin";
import { useLogin } from "@/src/contexts/LoginContext";
import { useEffect, useState } from "react";
import { api } from "@/src/config/axios.config";
import { AdminServices } from "@/src/services/adminServices";

export interface UsersFilters {
  name: string;
  role: string;
}

const drawerWidth = 260;

export default function ClientPage() {

  const router = useRouter();

  const { logout } = useLogin();


  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: grey[100] }}>
      <CssBaseline />

      <MenuAdmin />

      {/* Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Topbar */}
        <AppBar
          position="static"
          elevation={0}
          sx={{ bgcolor: "#fff", color: grey[700] }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6">Área Administrativa</Typography>
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
          <Card>
            <CardContent>

              <ClientFilter />

              <ClientTable />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
