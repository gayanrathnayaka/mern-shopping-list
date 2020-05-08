export interface IState {
  items: IItem[];
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IItem {
  _id?: string;
  name: string;
}

export interface IReducerItem {
  items: IItem[];
  loading: false;
}

export interface ITarget {
  target: {
    value: React.SetStateAction<string>;
  };
  preventDefault(): void;
}

export interface IMsg {
  msg: string | any;
}
