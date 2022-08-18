import { useRouter } from 'next/router';


export default function Search({setSearchInput, serachInput}) {
  
  const router = useRouter();
  console.log('router.pathname', router.pathname.includes('/blog/'));

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }
  const handleClick = () => {
    router.pathname.includes('/blog/') &&  router.push('/blog')
    
  }

  return (
    <>
      <div className="p-5 mb-5 border-b md:px-0">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300 font-interBold"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-skin-dark dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block p-4 pl-10 bg-skin-light text-skin-dark text-sm font-medium border border-black focus:border-[#6F49DD] focus:outline-none py-3 px-4 rounded w-full font-interMedium"
              placeholder="Search"
              value={serachInput}
              onChange={handleChange}
              onClick={handleClick}
            />
          </div>
        </form>
      </div>
    </>
  );
}
