import { ReactNode } from "react";

export type SelectOption<V> = {
	label: ReactNode;
	value: V;
};
export type SelectProps<V> = {
	options?: SelectOption<V>[];
	value?: V;
} & (
	| {
			cleareable: true;
			onChange?: (v?: V) => void;
	  }
	| {
			cleareable?: false;
			onChange?: (v: V) => void;
	  }
);
export const Select = <V extends string | number>({
	options = [],
	value,
	onChange,
}: SelectProps<V>) => {
	return (
		<select
			value={value}
			onChange={(e) => {
				onChange?.(
					options.find((o) => o.value.toString() === e.target.value)!.value,
				);
			}}
		>
			{options.map((o) => (
				<option key={o.value} value={o.value}>
					{o.label}
				</option>
			))}
		</select>
	);
};
