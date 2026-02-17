"use client";

import { useEffect, useState } from "react";
import { Modal, TextField, Avatar, IconButton, Button, Select, MenuItem, InputLabel, FormControl, Link, Snackbar, Alert } from "@mui/material";
import { Close, Edit, Save, Check, Delete } from "@mui/icons-material";
import { Clients } from "../ClientTable";
import { useClients } from "../../hooks/useClients";
import { InputDate } from "@/src/components/InputDate";
import { AdminServices } from "@/src/services/adminServices";

export interface ClientModalProps {
  client: Clients;
  open: boolean;
  close: () => void
}

export const ClientDetailsModal = ({
  client,
  open,
  close
}: ClientModalProps) => {
  const [edit, setEdit] = useState(false);
  const [dateType, setDateType] = useState("text");

  const { updateUser, deleteUser } = AdminServices();

  const {
    clientName, setClientName,
    clientDocument, setClientDocument,
    birthDate, setBirthDate,
    dateCreate, setDateCreate,
    dateUpdate, setDateUpdate,
    clientEmail, setClientEmail,
    clientPhone, setClientPhone,
    clientRole, setClientRole
  } = useClients(client)

  const [originalValues, setOriginalValues] = useState({
    name: client?.name,
    document: client?.document,
    birthDate: client?.birthDate,
    createdAt: client?.createdAt,
    updatedAt: client?.updatedAt,
    email: client?.email,
    phone: client?.phone,
    role: client?.role
  })

  const updateData = async () => {
    try {
      if (!edit) {
        setEdit(true);
        return;
      }
      const newData = {
        id: client?.id,
        image: client?.image,
        name: clientName,
        document: clientDocument,
        birthDate: new Date(birthDate),
        email: clientEmail,
        phone: clientPhone,
        role: clientRole,
        createdAt: new Date(dateCreate),
        updatedAt: new Date(dateUpdate)
      };

      const response = await updateUser(client.id.toString(), newData);

      alert("Usuário atualizado com sucesso!");
      setEdit(false);
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      alert("Falha ao atualizar usuário.");
    }
  }

  const deleteData = async () => {
    const response = await deleteUser(client?.id.toString());
    alert(response)
    setEdit(false)
    return close()
  }


  return (
    <Modal
      open={open}
      onClose={close}
    >
      <div className="min-h-screen w-full text-black flex items-center justify-center p-4">
        <div
          className="w-full max-w-200 rounded-xl bg-white border border-gray-200 p-8 shadow-2xl flex flex-col gap-8"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between relative">
              <h2 className="h-full text-lg font-semibold text-gray-500 ">Detalhes do Cliente</h2>
              <IconButton onClick={close} className="text-red-600! " >
                <Close />
              </IconButton>
            </div>

            <div className="w-full flex gap-5">
              <TextField
                label="Nome Completo"
                variant="outlined"
                fullWidth
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                disabled={edit ? false : true}
              />

              <TextField
                label="CPF / CNPJ"
                fullWidth
                variant="outlined"
                value={clientDocument}
                onChange={(e) => setClientDocument(e.target.value)}
                disabled={edit ? false : true}
              />
            </div>

            <div className="w-full flex gap-5">
              <InputDate
                label="Data de Nascimento"
                dateType={dateType}
                setDateType={setDateType}
                value={birthDate}
                setDate={setBirthDate}
                disabled={edit ? false : true}
              />

              <InputDate
                label="Data de Cadastro"
                dateType={dateType}
                setDateType={setDateType}
                value={dateCreate}
                setDate={setDateCreate}
                disabled={edit ? false : true}
              />

              <InputDate
                label="Data de Atualização"
                dateType={dateType}
                setDateType={setDateType}
                value={dateUpdate}
                setDate={setDateUpdate}
                disabled={edit ? false : true}
              />
            </div>

            <div className="w-full flex gap-5">
              <TextField
                variant="outlined"
                fullWidth
                disabled={edit ? false : true}
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                fullWidth
                disabled={edit ? false : true}
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Outros Dados</h3>

            <div className="flex gap-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-filled-label">Cargo</InputLabel>
                <Select
                  label="Cargo"
                  id="demo-simple-select-filled"
                  value={clientRole}
                  fullWidth
                  disabled={edit ? false : true}
                  onChange={(e) => setClientRole(e.target.value)}
                >
                  <MenuItem value="CLIENT">Cliente</MenuItem>
                  <MenuItem value="ADMIN">Administrador</MenuItem>
                </Select>
              </FormControl>

              {client?.image && (
                <Button
                  type="button"
                  variant="outlined"
                  fullWidth
                  className="p-3! rounded-sm! border! border-gray-400! z-0 "
                >
                  <a href={`${client?.image}`} target="_blank" >
                    Imagem do Perfil
                  </a>
                </Button>
              )}

            </div>

          </div>

          <div className="flex items-center justify-end gap-4">
            {edit && (
              <Button
                variant="contained"
                startIcon={<Close />}
                className="w-auto! bg-gray-500!"
                onClick={() => setEdit(false)}
              >
                Cancelar
              </Button>
            )}

            <Button
              variant="contained"
              startIcon={edit ? <Check /> : <Edit />}
              className="w-auto! bg-green-700!"
              onClick={updateData}
            >
              {edit ? "Salvar" : "Editar"}
            </Button>

            <Button
              variant="contained"
              startIcon={<Delete />}
              className="w-auto! bg-red-600!"
              onClick={deleteData}
            >
              Apagar
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}