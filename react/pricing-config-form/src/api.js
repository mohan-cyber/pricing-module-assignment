import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8002/api/',
});

export const getPricingConfigs = () => api.get('pricing-configurations');
export const addPricingConfig = (data) => api.post('pricing-configurations/create', data);
export const getPricingConfig = (id) => api.get(`pricing-configurations/${id}`);
export const updatePricingConfig = (id, data) => api.put(`pricing-configurations/${id}`, data);
export const deletePricingConfig = (id) => api.delete(`pricing-configurations/${id}`);
