import SearchInput from "./SearchInput";
import Sort from "./Sort";

interface TopProps {
  setSearch: Function;
};
const Top = ({ setSearch }: TopProps) => {
  return (
    <nav className="h-28 py-2 px-3 rounded-t bg-cyan-900 flex items-center justify-between">
      <SearchInput setSearch={setSearch} />
      <Sort />
    </nav>
  );
}

export default Top;