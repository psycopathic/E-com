import { create } from "zustand";
import axios from "../lib/axios.js";
import toast from "react-hot-toast";

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,

  setProduct: (products) => set({ products }),

  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response.data.error);
      set({ loading: false });
    }
  },

  //false ==> loading band aur true ==> loading nhi band
  fetchAllProducts: async () =>{
    console.log("inside fetch all products");
    set({loading:true});
    try {
        const response = await axios.get("/products");
        console.log("fetched products", response.data);
        set({products:response.data, loading:false});
    } catch (error) {
        set({error:"Failed to fetch products", loading:false});
        toast.error(error.response.data.error || "Failed to fetch products");
    }
  },

  deleteProduct: async (id) => {},
  toggleFeaturedProduct: async (id) => {},
}));
