export type SelectItem<T = string> = {
  value: T;
  label: string;
};
export type CommonSelectType<T> = {
  options: SelectItem<T>[];
  selected: T;
  onSelected: (value: T) => void;
};
