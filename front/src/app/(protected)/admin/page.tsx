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
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  Dashboard,
  ExitToApp,
  Person
} from "@mui/icons-material";

import { grey } from "@mui/material/colors";
import { Clients, ClientTable } from "./components/ClientTable";
import { ClientFilter } from "./components/ClientFilter";
import { MenuAdmin } from "./components/MenuAdmin";
import { useLogin } from "@/src/contexts/LoginContext";
import { useCallback, useEffect, useState } from "react";
import { AdminServices } from "@/src/services/adminServices";
import { RoleGuard } from "@/src/components/RoleGuard";
import { useRouter, useSearchParams } from "next/navigation";
import { ClientDetailsModal } from "./components/modal/ClientDetailsModal";
import { PerfilDetails } from "../PerfilDetails";
import { ClientTableMobile } from "./components/ClientTableMobile";

export interface UsersFilters {
  name: string;
  role: string;
}

const drawerWidth = 260;

export default function ClientPage() {

  const { user } = useLogin();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "dashboard";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { getAllUsers } = AdminServices();
  const { logout } = useLogin();

  const [users, setUsers] = useState<Clients[]>([])

  const fetchUsers = useCallback(async (filters?: { userName: string; userRole: string }) => {
    try {
      const name = filters?.userName;
      const role = filters?.userRole === "Todos" ? undefined : filters?.userRole;

      const response = await getAllUsers(name, role);
      setUsers(response);
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
    }
  }, [getAllUsers]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderContent = () => {
    switch (currentTab) {
      case "client":
        // return <ClientTable fetchUsers={fetchUsers} data={users} />;
        return (
          <>
            {isMobile ? (
              <ClientTableMobile
                data={users}
                fetchUsers={fetchUsers}
              />
            ) : (
              <ClientTable
                data={users}
                fetchUsers={fetchUsers}
              />
            )}
          </>
        );
      case "dados":
        return <PerfilDetails />;
      default:
        return <Typography>Bem-vindo ao Painel</Typography>;
    }
  };


  return (
    <RoleGuard allowedRole="ADMIN" >
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: grey[100] }}>
        
        <CssBaseline />

        {/* <MenuAdmin /> */}

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

            <div className="md:hidden">
              <Divider />

              <Toolbar sx={{ justifyContent: "space-between" }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/admin?tab=client")}>
                    <ListItemIcon sx={{ color: "#bababa" }}>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Clientes" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/admin?tab=dados")}>
                    <ListItemIcon sx={{ color: "#bababa" }}>
                      <Person />
                    </ListItemIcon>
                    <ListItemText primary="Meus Dados" />
                  </ListItemButton>
                </ListItem>
              </Toolbar>
            </div>
          </AppBar>

          {/* <Box sx={{ p: 4}} > */}
          <Box  >
            <Card className="sm:max-w-100! lg:max-w-screen!">
              <CardContent>
                  {renderContent()}
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </RoleGuard>
  );
}
