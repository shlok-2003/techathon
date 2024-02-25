import axiosInstance from "./main";

export const putParams = async (data: { uid: string; text: string }) => {
    try {
        const response = await axiosInstance({
            method: "POST",
            path: "/postParams",
            data,
        });

        if (response.data.success) {
            return response.data;
        } else {
            return response.data.message;
        }
    } catch (error) {
        console.error("Error:", error);
        return error;
    }
};

export const getParams = async (data: { uid: string }) => {
    try {
        const response = await axiosInstance({
            method: "GET",
            path: `/getParams`,
            data,
        });
        
        if (response.data.success) {
            return response.data;
        } else {
            return response.data.message;
        }
    } catch (error) {
        console.error("Error:", error);
        return error;
    }
};