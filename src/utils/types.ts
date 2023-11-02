export interface BasePaginatedRes {
  total: number;
  page: number;
  size: number;
  pages: number;
}
export interface Order {
  product: string;
  description: string;
  id: number | string;
  rating: number;
  created_at: Date;
  started_at: Date;
  status: number;
  urgent: boolean;
  user: any;
  user_manager: string;
  is_bot: boolean;
  brigada: {
    id: number | string;
    name: string;
    description?: string;
    status?: number;
    order?: string;
  };
  file: {
    url: string;
    status: number;
  }[];
  category: any;
  expanditure: {
    id: number;
    amount: number;
    comment: string;
    user: any;
    created_at: Date;
    tool: {
      code: string;
      id: number;
      mainunit: string;
      name: string;
      producttype: string;
    };
  }[];
  fillial: {
    id: number | string;
    name: string;
    longtitude: number;
    origin: number;
    latitude: number;
    parentfillial: { name: string };
    country: string;
    status: number;
  };
  finished_at: Date;
}

export interface OrderType extends BasePaginatedRes {
  items: Order[];
}
