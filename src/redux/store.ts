import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "./themeModeSlice";


export default configureStore({
    reducer: {
        themeMode: themeModeReducer
    }
})