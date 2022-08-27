export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[];
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  publish_details: {
    environment: string;
    locale: string;
    time: string;
    user: string;
  };
}

export interface Link {
  title: string;
  href: string;
}

export interface Seo {
  /** title */
  title?: string;
  /** Meta Description */
  meta_description?: string;
  /** Meta Keywords */
  meta_keywords?: string;
}

export interface Author {
  /** Full Name */
  title: string;
  /** Picture */
  picture?: File;
  /** Headline */
  headline?: string;
  /** Position */
  position?: string;
  /** Social Links */
  social_links?: {
    /** Link */
    link?: Link;
  }[];
}

/** Blog Post */
export interface Post {
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Short Description */
  short_description?: string;
  /** Image */
  image?: File;
  /** Post Content */
  content?: any;
  /** Rating */
  rating?: number;
  /** Category */
  category?: Category[];
  /** Author */
  author: Author[];
  /** SEO */
  seo?: Seo;
}

/** Footer component */
export interface Footer {
  /** Title */
  title: string;
  /** Copyright Message */
  copyright: any;
  /** Extra Links */
  extra_links?: [
    {
      /** external_link */
      external_link?: Link;
    },
    {
      /** external_link */
      external_link?: Link;
    },
    {
      /** external_link */
      external_link?: Link;
    },
    {
      /** external_link */
      external_link?: Link;
    },
    {
      /** external_link */
      external_link?: Link;
    },
    {
      /** external_link */
      external_link?: Link;
    }
  ];
}

export interface MenuItem {
  /** Menu Text */
  menu_text?: string;
  /** Menu Link */
  linked_page?: Homepage[];
  /** Submenu */
  submenu?: {
    /** Submenu Text */
    submenu_text?: string;
    /** External Link */
    external_link?: string;
    /** Submenu Link */
    submenu_link?: (Category | Announce)[];
  }[];
}

/** Blog Header */
export interface Header {
  /** Title */
  title: string;
  /** Logo */
  logo?: File;
  /** Menu */
  menu?: [MenuItem, MenuItem, MenuItem, MenuItem, MenuItem, MenuItem];
}

/** Post Category */
export interface Category {
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Category Color */
  category_color?: string;
  /** SEO */
  seo?: Seo;
}

export interface CarouselImage {
  /** Image title */
  image_title?: string;
  /** Image alt */
  image_alt?: string;
  /** Image description */
  image_description?: any;
  /** Image */
  image?: File;
  /** External Link */
  external_link?: string;
  /** Internal Link */
  internal_link?: Homepage[];
}

export interface Carousel {
  /** images */
  images?: [
    CarouselImage,
    CarouselImage,
    CarouselImage,
    CarouselImage,
    CarouselImage
  ];
}

export interface Welcome {
  /** Title */ title?: string;
  /** Website Description */
  website_description?: string;
}

export interface PostCatalog {
  /** Show catalog */
  show_catalog?: boolean;
  /** Limit */
  limit?: number;
  /** Categories */
  categories?: Category[];
}

/** Blog homepage */
export interface Homepage {
  /** Title */
  title: string;
  /** URL */
  url: string;
  /** Components */
  components?: ({ carousel?: Carousel } & { welcome?: Welcome } & {
    post_catalog?: PostCatalog;
  })[];
  /** SEO */
  seo?: Seo;
}

/** Blog global announce */
export interface Announce {
  /** Title */
  title: string;
  /** Description */
  description?: string;
  /** Show Announce */
  show_announce?: boolean;
}
