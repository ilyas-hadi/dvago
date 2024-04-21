import axios from "axios";
import { Product } from "../../types";

const api = axios.create({
  baseURL: "https://apidb.dvago.pk",
});

export const fetchRelatedProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<{ Data: Product[] }>(
      "/AppAPIV3/GetSuggestiveProductsV2&Usedfor=Fever%20Relief&UPC=1000000002557&BranchCode=32"
    );
    console.log(response.data.Data); // receive data
    return response.data.Data.map((product) => ({
      ID: product.ID,
      Title: product.Title,
      Category: product.Category,
      Brand: product.Brand,
      Price: product.Price,
      DiscountPrice:product.DiscountPrice,
      Description: product.Description,
      AvailableQty: product.AvailableQty,
      ProductImage: product.ProductImage,

    }));
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
};
