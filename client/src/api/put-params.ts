import axiosInstance from "./main";

export const putParams = async (data: { uid: string; text: string }) => {
    try {
        const response = await axiosInstance({
            method: "POST",
            path: "/postParams",
            data,
        });
        console.log("Response Status:", response.status);
        console.log("Response Data:", response.data);

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
