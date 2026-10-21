/* ---- Strapi "Blocks" rich text ---- */
export interface TextNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}
export interface LinkNode {
  type: "link";
  url: string;
  children: TextNode[];
}
export type InlineNode = TextNode | LinkNode;

export type BlockNode =
  | { type: "paragraph"; children: InlineNode[] }
  | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; children: InlineNode[] }
  | { type: "quote"; children: InlineNode[] }
  | { type: "code"; children: InlineNode[] }
  | { type: "list"; format: "ordered" | "unordered"; children: { type: "list-item"; children: InlineNode[] }[] }
  | { type: "image"; image: StrapiMedia & { caption?: string | null } };

export type BlocksContent = BlockNode[];

export interface StrapiMedia {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
  mime: string;
}

export interface ListItem {
  id: number;
  text: string;
}

export interface ServiceOffer {
  id: number;
  text: string;
  icon: StrapiMedia | null;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  order: number;
  description: string | null;
  icon: StrapiMedia | null;
  hoverIcon: StrapiMedia | null;
  thumbnailOne: StrapiMedia | null;
  thumbnailTwo: StrapiMedia | null;
  mainImage: StrapiMedia | null;
  overview: string | null;
  overviewImages: StrapiMedia[] | null;
  offerSummary: string | null;
  offers: ServiceOffer[];
  benefitSummary: string | null;
  benefits: ListItem[];
}

export interface Work {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  order: number;
  cardDescription: string | null;
  thumbnail: StrapiMedia | null;
  tag: string | null;
  location: string | null;
  projectDate: string | null;
  client: string | null;
  detailTitle: string | null;
  detailDescription: string | null;
  mainImage: StrapiMedia | null;
  body: BlocksContent | null;
  detailTags: ListItem[];
  summary: string | null;
  duration: string | null;
  roofArea: string | null;
  energySavings: string | null;
  warranty: string | null;
  features: ListItem[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
}
