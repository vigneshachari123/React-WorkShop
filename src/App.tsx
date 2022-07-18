import { PostScreen } from "./features/PostScreen";
import { PostsList } from "./features/PostsList";
import UserDetail from "./features/UserDetail";
import { UserList } from "./features/UserList";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <UserList />
          </div>
          <div className="col-md-8">
            <UserDetail />
            {/* <PostsList /> */}
            <PostScreen />
          </div>
        </div>
      </div>
    </>
  );
}
