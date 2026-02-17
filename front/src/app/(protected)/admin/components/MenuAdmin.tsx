"use client";

import {
    Avatar,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

import {
    Dashboard,
    Person,
    SupportAgent,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";
import { useLogin } from "@/src/contexts/LoginContext";

export const MenuAdmin = () => {

    const drawerWidth = 260;

    const { user } = useLogin();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    bgcolor: green[700],
                    color: "#fff",
                },
            }}
        >
            <Box sx={{ p: 3, textAlign: "center" }}>
                <Avatar
                    sx={{ width: 90, height: 90, margin: "0 auto", mb: 2 }}
                    src={user?.image ?? ""}
                />
                <Typography variant="h6">
                    {user?.name}
                </Typography>
            </Box>

            <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "#fff" }}>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Clientes" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "#fff" }}>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Meus Dados" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "#fff" }}>
                            <SupportAgent />
                        </ListItemIcon>
                        <ListItemText primary="Suporte" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}