import { Minus } from 'lucide-react';

type Props<T> = {
  value: T | undefined;
  render: (value: T) => React.ReactElement;
};
export function ValueOrDash<T>({ value, render }: Props<T>): React.ReactElement {
  if (!value) {
    return <Minus strokeWidth={1.2} size={25} className="opacity-50 text-slate-600" />;
  }

  return render(value as T);
}
