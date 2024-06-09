import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import fetchMock from "fetch-mock";

const mockDispatch = jest.fn();
const mockStore = {
  dispatch: mockDispatch,
};

describe("loginRequest", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("dispatches LOGIN and LOGIN_SUCCESS actions on successful API call", async () => {
    const email = "test@example.com";
    const password = "password123";

    fetchMock.getOnce("../../dist/login-success.json", {
      body: {
        first_name: "Johann",
        last_name: "Salva",
        email: "johann.salva@holberton.nz",
        profile_picture: "http://placehold.it/32x32",
      },
      status: 200,
    });

    await loginRequest(email, password)(mockStore.dispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    
    expect(mockDispatch).toHaveBeenCalledWith({
      type: LOGIN_SUCCESS,
      type: LOGIN,
      user: { email, password },
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: LOGIN_FAILURE,
      type: LOGIN,
      user: { email, password },
    });


    // Clear mock calls
    mockDispatch.mockClear();
  });
  it("dispatches LOGIN and LOGIN_FAILURE actions on failed API call", async () => {
    const email = "test@example.com";
    const password = "password123";

    fetchMock.getOnce("../../dist/login-success.json", {
      body: {},
      status: 404,
    });

    await loginRequest(email, password)(mockStore.dispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: LOGIN,
      user: { email, password },
    });
    expect(mockDispatch).toHaveBeenCalledWith({ type: LOGIN_FAILURE });

    // Clear mock calls
    mockDispatch.mockClear();
  });
});
