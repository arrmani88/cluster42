import { createSlice } from "@reduxjs/toolkit";


export const themeModeSlice = createSlice({
    name: 'themeModeSlice',
    initialState: { value: 'dark' },
    reducers: {
        setDarkMode: (state) => { state.value = 'dark' },
        setLightMode: (state) => { state.value = 'light' }
    }
})

export const { setDarkMode, setLightMode } = themeModeSlice.actions
export const selectThemeMode = (state: { value: string; }) => state.value
export default themeModeSlice.reducer