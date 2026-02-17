import { Clients } from "../app/admin/components/ClientTable";
import { api } from "../config/axios.config"

export function AdminServices() {
    const getAllUsers = async (name?: string, role?: string) => {
        const response = await api.get('/users', {
            params: {
                ...(name && { name }),
                ...(role && { role })
            }
        });

        return response.data;
    };

    const getUserByID = async (id: string) => {
        const response = await api.get(`/users/${id}`);
        return response.data;
    }

    const updateUser = async (id: string, data: Clients) => {
        const response = await api.put(`/users/${id}`, data)
        return response.data;
    }

    const deleteUser = async (id: string) => {
        const response = await api.delete(`/users/${id}`);
        return response.data;
    }

    return {
        getAllUsers,
        getUserByID,
        updateUser,
        deleteUser
    }
}