interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id: string;
}

export default function Checkbox({ label, checked, onChange, id }: CheckboxProps) {
  return (
    <div className="flex items-start space-x-3">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-gray-300 text-orange focus:ring-orange-hover cursor-pointer"
      />
      <label htmlFor={id} className="text-sm text-cream/90 cursor-pointer">
        {label}
      </label>
    </div>
  );
}