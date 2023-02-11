export class ProductModel {
  id: number = undefined;
  title: string = undefined;
  price: number = undefined;
  description: string = undefined;
  category: string = undefined;
  image: string = undefined;
  rating: ProductRating = new ProductRating();
}


export class ProductRating {
  rate: number = undefined;
  count: number = undefined;
}
