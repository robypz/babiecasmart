import { Product } from "../products/product.model";

export interface Category {
    name: string;
    description?: string | null;
    features: string[];
    products: Product[];
}
