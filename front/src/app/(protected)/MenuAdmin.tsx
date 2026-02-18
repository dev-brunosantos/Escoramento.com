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
import { useRouter } from "next/navigation";
import { useState } from "react";

export const MenuAdmin = () => {

    const router = useRouter();
    const drawerWidth = 260;

    const { user } = useLogin();

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: green[700] },
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
                    {user?.role == "ADMIN" && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => router.push("/admin?tab=client")}>
                                <ListItemIcon sx={{ color: "#fff" }}>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="Usuários" />
                            </ListItemButton>
                        </ListItem>
                    )}

                    {user?.role == "CLIENT" && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => router.push("/client?tab=dashboard")}>
                                <ListItemIcon sx={{ color: "#fff" }}>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="Dashbord" />
                            </ListItemButton>
                        </ListItem>
                    )}

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            if (user?.role == "ADMIN") {
                                router.push("/admin?tab=dados")
                            }
                            else {
                                router.push("/client?tab=dados")
                            }
                        }}>
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

            {/* Desktop Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: green[700] },
                }}
                open
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
                    {user?.role == "ADMIN" && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => router.push("/admin?tab=client")}>
                                <ListItemIcon sx={{ color: "#fff" }}>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="Usuários" />
                            </ListItemButton>
                        </ListItem>
                    )}

                    {user?.role == "CLIENT" && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => router.push("/client?tab=dashboard")}>
                                <ListItemIcon sx={{ color: "#fff" }}>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="Dashbord" />
                            </ListItemButton>
                        </ListItem>
                    )}

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            if (user?.role == "ADMIN") {
                                router.push("/admin?tab=dados")
                            }
                            else {
                                router.push("/client?tab=dados")
                            }
                        }}>
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
        </>
    )
}