import Stack from "../contentstack-sdk";
import { addEditableTags } from "@contentstack/utils";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
  ? process.env
  : publicRuntimeConfig;

const liveEdit = envConfig.CONTENTSTACK_LIVE_EDIT_TAGS === "true";

export const getHeaderRes = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "header",
    referenceFieldPath: ["menu.linked_page", "menu.submenu.submenu_link"],
  });

  return response[0][0];
};

export const getFooterRes = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "footer",
    referenceFieldPath: undefined,
    jsonRtePath: ["copyright"],
  });

  return response[0][0];
};

export const getHomepageRes = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "homepage",
    referenceFieldPath: undefined,
    jsonRtePath: ["components.carousel.images.image_description"],
  });

  return response[0][0];
};

export const getAllPostsRes = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "post",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  });

  return response[0];
};

export const getAnnounceRes = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "announce",
  });

  return response[0][0];
};

export const getCategoryRes = async (entryUrl) => {
  const response = await Stack.getEntryByUrl({
    contentTypeUid: "category",
    entryUrl,
  });

  return response[0];
};

export const getPostRes = async (entryUrl) => {
  const response = await Stack.getEntryByUrl({
    contentTypeUid: "post",
    jsonRtePath: ["content"],
    referenceFieldPath: ["author", "category"],
    entryUrl,
  });

  return response[0];
};

export const getCategoriesRes = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "category",
  });

  return response[0];
};

export const getPostsByCategoryRes = async (categories, limit) => {
  const response = await Stack.getPostsByCategory({
    categories,
    jsonRtePath: ["content"],
    limit: limit,
  });

  return response[0];
};