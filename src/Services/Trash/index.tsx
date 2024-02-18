import instance from "@/Lib/axios/instance";


const userServices = {
    getAllUsers: () => instance.get('/api/user/'),
    updateUsers: (id: string, data: any) => instance.put("/api/user/", {id, data}),
    deleteUsers: (id: string) => instance.delete(`/api/user/${id}`)
}

export default userServices;