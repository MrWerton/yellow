import { createContext, useState } from "react";

interface BottomSheetContextData {
    visible: boolean
    onShow: () => void
    onHide: () => void
}

export const BottomSheetContext = createContext({} as BottomSheetContextData)
