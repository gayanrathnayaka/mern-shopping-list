import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "../actions/types";
import { IState, IAction } from "../../types/interfaces";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  loading: false,
};

export default (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_ITEM:
      toast.success("Item Succefully Deleted");
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM:
      if (action.payload.name !== "") {
        toast.success("Item Succefully Saved");
        return {
          ...state,
          items: [action.payload, ...state.items],
        };
      }
      break;
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
