export class ProductModel {
  id: Number;
  category: string;
  description: string;
  image: string;
  price: Number;
  rating: { rate: Number; count: Number };
  title: string;

  constructor(
    category?: string,
    description?: string,
    id?: Number,
    image?: string,
    price?: Number,
    rating?: { rate: Number; count: Number },
    title?: string
  ) {
    this.category = category || '';
    this.description = description || '';
    (this.id = id || 0), (this.image = image || '');
    this.price = price || 0;
    this.rating = rating || { rate: 0, count: 0 };
    this.title = title || '';
  }
}
