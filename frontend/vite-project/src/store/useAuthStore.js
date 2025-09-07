import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  email: "",
  loading: false,
  message: null,
  error: null,

  setEmail: (email) => set({ email }),

  sendVerification: async () => {
    set({ loading: true, message: null, error: null });
    try {
      const res = await axios.post(
        "https://getting-location.vercel.app/api/email/send",
        {
          email: useAuthStore.getState().email,
        }
      );
      set({ loading: false, message: res.data.message });
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.error || "Something went wrong",
      });
    }
  },
}));

export default useAuthStore;
