import { http } from '@/plugin/axios'

export function getData(data?: any) {
    http.get(``, { params: data })
} 