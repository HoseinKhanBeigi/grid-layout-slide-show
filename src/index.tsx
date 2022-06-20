import { createStore, Action } from "redux"
import React, { Dispatch } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, createAsyncThunk, createSlice, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit';
import { resolve } from "path";


const fetchPosts = createAsyncThunk('post/fetch', async () => {
  let promise = new Promise(function (resolve, reject) {
    return resolve("done");
  });

  return promise
})
const initialState: any = []
export const fetchUsers = createAsyncThunk('use/fetchUsers', async () => {
  return await new Promise(function (resolve: (value: any) => void, reject) {
    setTimeout(() => resolve('done'), 4000)
  });
})
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

const store = configureStore({
  reducer: usersSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchUsers())




// const getRepoDetailStarted = () => ({
//   type: 'repo/fetchStarted'
// })

// const getRepoDetailsSuccess = (repoDetails: object | string | number) => ({
//   type: 'repoDetails/fetchSucceeded',
//   payload: repoDetails
// })

// const getRepoDetailsFailed = (error: Error) => ({
//   type: 'repoDetails/fetchFailed',
//   error
// });

// const fetchIssuesCount = (org: any, repo: any) => async (dispatch: any) => {
//   dispatch(getRepoDetailStarted())
//   try {
//     const repoDetails = await getRepoDetails(org, repo)
//     dispatch(getRepoDetailsSuccess(repoDetails))
//   } catch (err: any) {
//     dispatch(getRepoDetailsFailed(err.toString()))
//   }
// }


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App text={''} />
  </React.StrictMode>
);
reportWebVitals();
