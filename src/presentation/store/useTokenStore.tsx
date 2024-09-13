import { create } from 'zustand';
import { StorageAdapter } from '../../config/storage/storage.adapter';
import { tokenStorage } from '../../config/constant/constant';

export interface AuthState {
    token: string;
    checkToken: () => Promise<boolean>

}

export const useTokenStore = create<AuthState>()((set, get) => ({
    token: '',
    checkToken: async () => {
        const token1 = await StorageAdapter.getItem(tokenStorage);
        if (token1) {
            set({ token: token1 })
            return true
        } else {
           
            set({ token: '' })
            return false
        }
    }


}))