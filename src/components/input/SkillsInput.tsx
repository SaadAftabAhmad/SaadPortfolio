interface InputProps {
    children: string;
    value: number;
    set: (newValue: number) => void;
    min?: number;
    max?: number;
  }
  
  export function Input({
    value,
    children,
    set,
    min = -200,
    max = 200
  }: InputProps) {
    return (
      <label className="flex items-center my-[10px]">
        <code className="w-[100px]">{children}</code>
        <input
          className="accent-[#fe0222]"
          value={value}
          type="range"
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value))}
        />
        <input
          className="border-0 border-b border-dotted border-[#fe0222] focus:outline-none ml-2"
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value) || 0)}
        />
        <style>
          {`
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        `}
        </style>
      </label>
    );
  }
  