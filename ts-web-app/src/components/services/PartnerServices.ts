import axios from "axios";
import { IPartnerContract } from "../models/IPartnerContract";

const API = 'https://localhost:44370'

export const getPartners = async () => {
    return await axios.get(`${API}/partners`)
}

export const createPartner = async (partner: IPartnerContract) => {
    return await axios.post(`${API}/partners`, partner)
}