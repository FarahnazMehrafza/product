import create from 'zustand';

// Define types for product and product state
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ProductState = {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (productId: number, updatedProduct: Product) => void;
  deleteProduct: (productId: number) => void;
};

// Initial state
const initialProductState: ProductState = {
  products: [],
  addProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
};

// Create Zustand store
const useProductStore = create((set) => ({
  ...initialProductState,
  addProduct: (product: Product) =>
    set((state: ProductState) => ({
      products: [...state.products, product],
    })),
  updateProduct: (productId: number, updatedProduct: Product) =>
    set((state: ProductState) => ({
      products: state.products.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      ),
    })),
  deleteProduct: (productId: number) =>
    set((state: ProductState) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
}));

export default useProductStore;
