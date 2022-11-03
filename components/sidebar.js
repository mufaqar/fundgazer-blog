import AuthorProfile from "./authorProfile";
import RecentPost from "./recentPost";
import PopularTag from "./popularTag";
import Search from "./search";
import {useRouter} from "next/router";


export default function Sidebar({tags, latestBlogs, authorName, ProfileURL, linkedinURL, setSearchInput, serachInput}) { 
  const router = useRouter();
  
  return (
    <aside className="relative ">
      <Search setSearchInput={setSearchInput} serachInput={serachInput}/>
      <AuthorProfile authorName={authorName} ProfileURL={ProfileURL} linkedinURL={linkedinURL}/>
      <PopularTag tags={tags}/>
      {router?.pathname === '/blog' && <RecentPost latestBlogs={latestBlogs}/>}

    </aside>
  );
}
