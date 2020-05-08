import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockResponse from "./mockItemResponse.json";
import { GET_ITEMS } from "../types";
import { getItems } from "../itemActions";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Item Action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("creates GET_POSTS_SUCCESS after successfuly fetching postse", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: mockStore,
      });
    });

    const expectedActions = [{ type: GET_ITEMS, payload: mockResponse }];

    const store = mockStore();

    return store.dispatch(getItems() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
