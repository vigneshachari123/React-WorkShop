import { useSnapshot } from "valtio";
import { postsState } from "../store";
import { PostsList } from "./PostsList";

export const PostScreen = () => {
  const { postsList } = useSnapshot(postsState);

  return (
    <div>
      <h1>Post Lists</h1>
      {postsList.map((item) => {
        // return <p>{item.body}</p>;
        return (
          <>
            <PostsList item={item} />
          </>
        );
      })}
    </div>
  );
};
