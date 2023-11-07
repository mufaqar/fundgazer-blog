import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { stocks } from "../../const/stock";

export default function Search_Form() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        if (event.target.value !== "") {
            const results = stocks.filter((stock) =>
                stock.name.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };
    const handleAlert = () => {
        if (searchResults.length === 0 && searchTerm !== "") {
            window.alert("Term not found");
        }
    };

    return (
        <div className="flex md:flex-row flex-col justify-between">
            <div>
                <form onSubmit={handleSearch} className="space-x-0 space-y-2 md:flex md:space-x-2 md:space-y-0">
                    <div className="border border-[#9B9797] rounded-md md:w-[340px] w-full relative">
                        <AiOutlineSearch className="text-2xl font-extrabold absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            id="search"
                            placeholder="Search"
                            name="search"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="font-interRegular bg-transparent text-skin-muted text-sm font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-12 pr-4 rounded-md w-full h-full"
                        />
                    </div>
                    <button type="submit" className="md:flex hidden items-center cursor-pointer px-6 text-xl py-3 text-[20px] w-full justify-center md:w-auto font-medium rounded-md font-interMedium bg-skin-bgFooter text-skin-light hover:opacity-75 transition ease-in-out delay-75 duration-200">
                        Search
                    </button>
                </form>
                <ul>
                    {searchResults.length > 0 ? (
                        searchResults.map((stock) => (
                            <li key={stock.id}>{stock.name}</li>
                        ))
                    ) : (
                        <li>{searchTerm !== "" ? "Term not found" : ""}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}