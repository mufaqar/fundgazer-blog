import AuthorProfile from "./authorProfile";
import RecentPost from "./recentPost";
import PopularTag from "./popularTag";
import Search from "./search";


export default function Sidebar({tags, latestBlogs, authorName, ProfileURL, linkedinURL, setSearchInput, serachInput}) { 

  return (
    <aside className="relative ">
      <Search setSearchInput={setSearchInput} serachInput={serachInput}/>
      <AuthorProfile authorName={authorName} ProfileURL={ProfileURL} linkedinURL={linkedinURL}/>
      <PopularTag tags={tags}/>
      <RecentPost latestBlogs={latestBlogs}/>

    </aside>
  );
}
