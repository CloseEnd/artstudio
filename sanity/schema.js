import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import projects from "./schemas/projects";
import comments from "./schemas/comments";
import shop from "./schemas/shop";

export const schema = {
  types: [post, author, category, blockContent, projects, shop, comments],
};
