import AuthorProfile from "./authorProfile";
import RecentPost from "./recentPost";
import PopularTag from "./popularTag";
import Search from "./search";

export default function Sidebar({latestBlogs, blog}) {

  return (
    <aside>
      <Search />
      <AuthorProfile blog= {blog}/>
      <PopularTag />
      <RecentPost latestBlogs={latestBlogs} />
    </aside>
  );
}
