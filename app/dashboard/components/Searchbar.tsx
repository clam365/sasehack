import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className=" hidden lg:flex items-center bg-[#f1f1f1] rounded-full px-4 py-3 w-full max-w-xl hover:bg-gray-200 transition">
            <Search className="text-gray-500 w-5 h-5" />
            <input
                type="text"
                placeholder="Search spots"
                className="bg-transparent ml-2 w-full outline-none text-gray-700"
            />
        </div>
    );
};

export default SearchBar;
