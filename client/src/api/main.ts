import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-hot-toast";

export const axiosInstance: AxiosInstance = axios.create({
    timeout: 5000,
});

interface AxiosAdvancedProps extends AxiosRequestConfig {
    method: "GET" | "POST" | "PUT" | "DELETE";
    path: string;
}

export const axiosAdvanced = async ({
    method,
    path,
    data,
    headers,
    params,
}: AxiosAdvancedProps) => {
    const url = "http://localhost:4000/api" + path;
    console.log("url", url);

    const token = window.localStorage.getItem("token");

    const config: AxiosRequestConfig = {
        method: method || "GET",
        url,
        data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...headers,
        },
        params,
    };

    try {
        const response: AxiosResponse = await axiosInstance(config);

        return response;
    } catch (error) {
        const message =
            (error as Error).message ||
            "An error occurred in axiosAdvanced. Please try again later.";

        toast.error(message, {
            position: "bottom-right",
        });

        const errorInfo = {
            status: 500,
            message: message,
        };

        return errorInfo;
    }
};

export default axiosAdvanced;
