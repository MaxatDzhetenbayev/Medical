type NestedLinkType = {
  path: string;
  title: () => string;
};

export type LinkType = {
  path: string;
  title: () => string;
  children?: NestedLinkType[];
};
