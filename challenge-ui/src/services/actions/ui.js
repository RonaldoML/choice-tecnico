import { types } from "../types/types";


export const isLoading = () => ({
  type: types.isLoading,
})

export const noLoading = () => ({
  type: types.noLoading,
})

export const isError = (error) => ({
  type: types.isError,
  payload: error,
})

export const noError = () => ({
  type: types.noError,
})