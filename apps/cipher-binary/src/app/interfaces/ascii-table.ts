export type AsciiTable = {
  [key: string]: BaseTable;
};

export type BaseTable = {
  decimal: number;
  binary: string;
  octal: string;
  hex: string;
};
