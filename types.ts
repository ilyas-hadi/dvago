export interface Product {
  ID: string;
  Title: string;
  Category: string;
  Brand: string;
  Price: string;
  Description: string;
  AvailableQty: string;
  ProductImage: string;
  DiscountPrice:string;
}
export interface ProductDetails {
  id(id: any): { payload: string; type: "cart/addToCart"; };
  ID:string;
  Title: string;
  Description: string;
  Price: string;
  ProductImage: string;
  Category: string;
  Brand: string;
  AvailableQty: string;
  BrandSlug:string;
  Variations:string;
  MetaTitle:string;
  MetaDescription:string;

}

