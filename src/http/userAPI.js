import {$host} from '@/http/index';

export const registration = async (email, password) => {
  const responce = await $host.post('api/auth/registration', {email, password, role: 'ADMIN'})
}

export const login = async (email, password) => {
  const responce = await $host.post('api/auth/login', {email, password})
}

export const check = async () => {
  const responce = await $host.post('api/auth/registration', {email, password, role: 'ADMIN'})
}