export interface Todo {
  firstName: string;
  surName: string;
  key?: number;
}
export type DeleteHandler = (key?: number) => void;