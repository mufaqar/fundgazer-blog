import AuthorProfile from "./authorProfile";
import RecentPost from "./recentPost";
import PopularTag from "./popularTag";
import Search from "./search";
import { useEffect, useState } from "react";


export default function Sidebar({tags, latestBlogs, authorName, ProfileURL, linkedinURL, setSearchInput, serachInput}) {
  
  // const [scrollTop, setScrollTop] = useState(0);
  // const [positionSticky, setPsoitionSticky] = useState(false);

  // console.log("🚀 ~ file: sidebar.js ~ line 10 ~ Sidebar ~ positionSticky", positionSticky)
  // useEffect(() => {
  //   function onScroll() {
  //     let currentPosition = window.pageYOffset;
  //     setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
  //   }
  //   scrollTop >= '436' ? setPsoitionSticky(true) : setPsoitionSticky(false);
  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  
  // }, [scrollTop]);


  return (
    <aside className="relative">
      <Search setSearchInput={setSearchInput} serachInput={serachInput}/>
      <AuthorProfile authorName={authorName} ProfileURL={ProfileURL} linkedinURL={linkedinURL}/>
      <PopularTag tags={tags}/>
      <RecentPost latestBlogs={latestBlogs} />
    </aside>
  );
}
