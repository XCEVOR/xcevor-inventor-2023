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
  catSlug: string;
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

export type AboutSkillType = {
  id: string;
  classification: string;
  priority: number;
  title: string;
  image: string;
  url: string;
  isDisplayed: boolean;
}

export type aboutInterestDataType = {
  id: string;
  priority: number;
  title: string;
  logo: string;
}


export type ResumeDataType = {
  id: string;
  classification: string
  title: string
  detail: string
}

export type ResumeDataDescriptionType = {
  id: string;
  period?: string;
  location?: string;
  thesis: boolean;
  desc: string;
}