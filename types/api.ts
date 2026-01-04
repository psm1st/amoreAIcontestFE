export interface ProductItem {
  product_id: number;
  title: string;
  image_url: string;
}

export interface SliceInfo {
  size: number;
  has_next: boolean;
  total_elements: number;
}

export interface ProductListResponse {
  status: string;
  message: string;
  code: number;
  data: {
    items: ProductItem[];
    slice: SliceInfo;
  };
}

export interface ProductListParams {
  category?: string | null;
  lastId?: number | null;
  size?: number;
}

export interface ProductDetailData {
  name: string;
  category: string;
  sold_count: string;
  liked_count: string;
  review_count: string;
  rating: number;
  thumbnail_url: string;
}

export interface ProductDetailResponse {
  status: string;
  message: string;
  code: number;
  data: ProductDetailData;
}

