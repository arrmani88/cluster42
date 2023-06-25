import { createSlice } from "@reduxjs/toolkit";


export const themeModeSlice = createSlice({
    name: 'themeModeSlice',
    initialState: 'light',
    reducers: {
        setDarkMode: (state) => { state = 'dark' },
        setLightMode: (state) => { state = 'light' }
    }
})

export const { setDarkMode, setLightMode } = themeModeSlice.actions
export const selectThemeMode = (state: { themeMode: string; }) => state.themeMode
export default themeModeSlice.reducer