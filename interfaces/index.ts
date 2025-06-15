export interface CardProps {
  title: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface PropertyProps {
  name: string;
  image: string;
  rating: number;
  description: string;
  price: number;
  category: string[];
  address: {
    city: string;
    country: string;
  };
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}