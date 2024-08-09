import { ISendEmail } from "@/api/types";
import { API_URLS } from "@/api/urls";
import axios from "axios";

export const useSendEmail = () => {
    const sendEmail = async (postData: ISendEmail) => {
        try {
            const response = await axios.post(API_URLS.sendEmail, postData);

            return {
                error: false,
                data: response.data
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Handle Axios specific errors
                console.error('There was a problem with the axios operation:', error.message);
            } else {
                // Handle non-Axios errors
                console.error('An unexpected error occurred:', error);
            }
            return {
                error: true
            };
        }
    };

    return { sendEmail };
}