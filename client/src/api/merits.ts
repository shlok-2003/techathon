import axiosInstance from "./main";

export const getSocial = async (data: { uid: string }) => {
    try {
        console.log("data", data);
        const response = await axiosInstance({
            method: "GET",
            path: "/getSocial",
            params: data,
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

export const getMerits = async (data: { uid: string }) => {
    try {
        const response = await axiosInstance({
            method: "GET",
            path: "/getMerits",
            params: data,
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

export const getAllMerits = async (data?: { uid: string }) => {
    try {
        const response = await axiosInstance({
            method: "GET",
            path: "/getAllMerits",
            params: data,
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
