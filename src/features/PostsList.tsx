import { postsType } from "../model";

interface itemType {
  item: postsType;
}

export const PostsList = (Postitems: itemType) => {
  return (
    <>
      <p>{Postitems.item.body}</p>
    </>
  );
};
