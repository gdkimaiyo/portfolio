import axios from "axios";
import { BACKEND_API } from "../../secrets.config";

// Add a new property/project
export const saveMessage = async (data) => {
  const response = await axios.post(
    `${BACKEND_API}/api/v1/portfolio/contact-us`,
    data
  );
  return response.data;
};
