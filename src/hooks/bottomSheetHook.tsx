import { useContext } from "react"
import { BottomSheetContext } from "../@shared/contexts/bottomSheetContext"

export const useBottomSheet = () => {
    const context = useContext(BottomSheetContext)
    if (context === undefined) {
        throw new Error('useBottomSheet must be used within an BottomSheetProvider');
    }

    return context
}