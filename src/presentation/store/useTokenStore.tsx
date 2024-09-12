import { create } from 'zustand';

export interface AuthState {
 status:string
 getStatus:()=>void,
 returnvoid:()=>void
}

export const useTokenStore = create<AuthState>()((set, get) => ({
    status: 'ko',
    getStatus:()=>{
        set({status:'ok'})
    },
    returnvoid:()=>{
        set({status:'ko'})
    },
   
}))