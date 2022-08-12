import AuthorProfile from "./authorProfile";
import RecentPost from "./recentPost";
import PopularTag from "./popularTag";
import Search from "./search";

export default function Sidebar() {
  return (
    <aside>
      <Search />
      <AuthorProfile />
      <PopularTag />
      <RecentPost />
    </aside>
  );
}
