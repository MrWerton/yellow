import { useState } from "react"
import { BottomSheetContext } from "../contexts/bottomSheetContext"

export const BottomSheetProvider = ({ children }) => {
    const [visible, setVisible] = useState(false)

    const handlerShow = () => {
        setVisible(true)
    }
    const handlerHide = () => {
        setVisible(false)
    }



    return (
        <BottomSheetContext.Provider value={{ visible: visible, onShow: handlerShow, onHide: handlerHide }}>
            {children}
        </BottomSheetContext.Provider>
    )
}