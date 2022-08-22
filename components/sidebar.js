import AuthorProfile from "./authorProfile";
import RecentPost from "./recentPost";
import PopularTag from "./popularTag";
import Search from "./search";


export default function Sidebar({tags, ssticky, sideBarSticky, latestBlogs, authorName, ProfileURL, linkedinURL, setSearchInput, serachInput}) { 
console.log("🚀 ~ file: sidebar.js ~ line 8 ~ Sidebar ~ sideBarSticky", sideBarSticky)

  return (
    <aside className="relative ">
      <Search setSearchInput={setSearchInput} serachInput={serachInput}/>
      <AuthorProfile authorName={authorName} ProfileURL={ProfileURL} linkedinURL={linkedinURL}/>
      <PopularTag tags={tags}/>
      <div className={`${ssticky ? sideBarSticky ? 'fixed top-24' : 'absloute' : 'absloute'}`}>
      <RecentPost latestBlogs={latestBlogs}/>
      </div>
    </aside>
  );
}
