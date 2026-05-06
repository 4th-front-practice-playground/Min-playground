export interface Product {
  breadcrumb: string[];
  title: string;
  subtitle: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProductTab {
  id: string;
  label: string;
  isActive?: boolean;
}
