type ConvertPropertyOption<T> = {
  [P in keyof T]?: T[P];
};
declare type Condition<T> = ConvertPropertyOption<T>;
declare type PropertyOption<T> = ConvertPropertyOption<T>;
