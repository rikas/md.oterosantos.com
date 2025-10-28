import { Search } from 'lucide-react';

type Props = {
  value: string;
  onChange: (event: { detail: { filteringText: string } }) => void;
};

export function SearchInput({ value, onChange }: Props): React.ReactElement {
  return (
    <div className="relative grow">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search strokeWidth={1.3} size={20} />
      </div>

      <input
        type="search"
        placeholder="Search..."
        value={value}
        onChange={({ target }) => onChange({ detail: { filteringText: target.value } })}
        className="w-full md:max-w-lg p-2.5 ps-10 rounded bg-slate-900 text-slate-200 ring ring-slate-800 focus:ring-slate-500 focus-visible:ring-slate-500 outline-none"
      />
    </div>
  );
}
