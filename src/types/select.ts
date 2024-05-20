export type SelectItem<T = string> = {
  value: T;
  label: string;
};
export type CommonSelectType<T> = {
  options: SelectItem<T>[];
  selected: T | null;
  onSelected: (value: T) => void;
};
