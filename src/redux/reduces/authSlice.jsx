import { createSlice } from "@reduxjs/toolkit";
import { LoginAdminData } from "../actions/authActions";
import Alertify from "../../services/alertify";

const initialState = {
  is_Login: true,
  email_or_mobile: null,
  token: "",
  role: "",
  seller_code: "",
  name: null,
  session_start_time: null, // Added to track session start
};

const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
// const SESSION_TIMEOUT = 10000; // 24 hours in milliseconds

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("session_start_time"); // Remove session start time
      return { ...initialState };
    },
    ResetLocalState: (state) => {
      return { ...initialState };
    },
    checkSessionTimeout: (state) => {
      const sessionStart = localStorage.getItem("session_start_time");
      const currentTime = Date.now();

      if (
        sessionStart &&
        currentTime - parseInt(sessionStart, 10) > SESSION_TIMEOUT
      ) {
        Alertify.error(
          "Session Timeout!",
          "Your session has expired. Please log in again."
        );
        localStorage.removeItem("token");
        localStorage.removeItem("session_start_time");
        return { ...initialState };
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginAdminData.fulfilled, (state, { payload }) => {
      state.is_Login = true;
      state.name = payload.data.user.name;
      state.token = payload.data.token;
      state.email_or_mobile = payload.data.user.email;
      state.seller_code = payload.data.user.seller_code;
      state.role = payload.data.user.role;

      const sessionStartTime = Date.now();
      state.session_start_time = sessionStartTime;
      localStorage.setItem("token", payload.data.token);
      localStorage.setItem("session_start_time", sessionStartTime.toString()); // Save session start time
    });
    builder.addCase(LoginAdminData.rejected, (state, action) => {
      console.error("Login failed:", action.error.message);
    });
    // builder.addCase(AdminForgotPassword.fulfilled,);
  },
});

export const { logout, ResetLocalState, checkSessionTimeout } =
  authSlice.actions;

export default authSlice.reducer;
