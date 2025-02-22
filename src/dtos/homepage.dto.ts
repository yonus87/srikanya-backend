export class HomepageDTO {
  id: string;
  logo?: string[];
  locations: {
    wishMessage?: string | string[];
    carouselImage?: string[];
    productlist?: {
      [key: string]: { // Dynamic product types (Cement, Steel, etc.)
        images: string[];
        name: string;
        primaryRate?: number;
      }[];
    };
    testimonials: {
      image_logo?: string;
      content?: string;
      name: string;
      designation?: string;
    }[];
    customers: {
      image?: string;
      name: string;
    }[];
  }[];
}
