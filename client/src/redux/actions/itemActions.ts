import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from "./types";
import { IItem } from "../../types/interfaces";
import axios from "axios";
import { returnErrors } from "./errorActions";

export const getItems = () => (dispatch: Function) => {
  return axios
    .get("/api/items")
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
      return res.data;
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      return err.response.data;
    });
};

export const addItem = (item: IItem) => (dispatch: Function) => {
  axios
    .post("/api/items", item)
    .then((res) => {
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteItem = (id: any) => (dispatch: Function) => {
  axios
    .delete(`/api/items/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
