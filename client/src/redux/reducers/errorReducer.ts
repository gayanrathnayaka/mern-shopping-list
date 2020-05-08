import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";
import { IAction } from "../../types/interfaces";
import { toast } from "react-toastify";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_ERRORS:
      console.log();
      const closeAfter15 = () =>
        toast.error(
          `          status :- ${action.payload.status} 
                     message :- ${
                       JSON.stringify(action.payload.msg)
                         .split("<pre>")[1]
                         .split("</pre>")[0]
                     }`,
          { autoClose: false }
        );
      closeAfter15();

      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };

    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};
