/**
 * MenuDrawer.jsx
 * -----------------------------
 * Componente que implementa un AppBar fijo y un Drawer lateral
 * con opciones de navegación para la aplicación de Gestión Escolar.
 *
 * Tecnologías usadas:
 * - Material UI (AppBar, Drawer, List, etc.)
 * - React Icons (para los íconos de cada opción)
 * - React Router (para la navegación con <Link>)
 */

import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { FaCode, FaTasks, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const drawerWidth = 200; // Ancho del menú lateral
const APPBAR_HEIGHT = 100; // Alto del AppBar

export default function MenuDrawer() {
  const [open, setOpen] = React.useState(false);

  // Ajusta el paddingTop del body para evitar que el contenido quede oculto por el AppBar
  React.useEffect(() => {
    const previousPaddingTop = document.body.style.paddingTop;
    document.body.style.paddingTop = `${APPBAR_HEIGHT}px`;
    return () => {
      document.body.style.paddingTop = previousPaddingTop;
    };
  }, []);

  // Maneja apertura/cierre del menú
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Contenido del Drawer
  const drawer = (
    <div>
      {/* Cabecera */}
      <Toolbar sx={{ minHeight: `${APPBAR_HEIGHT}px` }}>
        <Typography
          variant="h6"
          noWrap
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#a0cd60",
            fontFamily: "Fira Code, monospace",
          }}
        >
          <FaCode style={{ marginRight: 8 }} />
          Opciones
        </Typography>
      </Toolbar>

      <Divider />

      {/* Opciones de Menú */}
      <List>
        {/* VER ESTUDIANTES */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/inbox"
            onClick={handleDrawerToggle}
          >
            <FaTasks style={{ marginRight: 10 }} />
            <ListItemText primary="Ver Estudiantes" />
          </ListItemButton>
        </ListItem>

        {/* AGREGAR */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/agregar"
            onClick={handleDrawerToggle}
          >
            <FaPlus style={{ marginRight: 10 }} />
            <ListItemText primary="Agregar Estudiante" />
          </ListItemButton>
        </ListItem>

        {/* MODIFICAR */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/modificar"
            onClick={handleDrawerToggle}
          >
            <FaEdit style={{ marginRight: 10 }} />
            <ListItemText primary="Modificar Estudiante" />
          </ListItemButton>
        </ListItem>

        {/* ELIMINAR */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/eliminar"
            onClick={handleDrawerToggle}
          >
            <FaTrash style={{ marginRight: 10 }} />
            <ListItemText primary="Eliminar Estudiante" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />

      {/* Barra superior */}
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          backgroundColor: "#a0cd60",
        }}
      >
        <Toolbar sx={{ minHeight: `${APPBAR_HEIGHT}px !important` }}>
          {/* Botón menú */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Título */}
          <Typography
            variant="h6"
            noWrap
            sx={{ fontFamily: "Fira Code, monospace" }}
          >
            Gestion Escolar
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#F2E7DC",
            color: "#038C7F",
            marginTop: `${APPBAR_HEIGHT}px`,
          },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
