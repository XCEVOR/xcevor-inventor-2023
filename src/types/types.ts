export type CategoriesType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type ProductDescType = {
  id: string;
  desc: string;
}

export type ProductImgType = {
  id: string;
  img: string;
}


export type aboutMeDataType = {
  id: string;
  classification: string;
  title: string;
  detail: string;
}