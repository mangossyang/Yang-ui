import { RefObject, useEffect } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, cb: Function) => {
    useEffect(() => {
        const listeners = (e: MouseEvent) => {
            if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
                return
            }
            cb(e)
        }
        document.addEventListener('click', listeners)
        return () => {
            document.removeEventListener('click', listeners)
        }
    }, [ref, cb])
}

export default useClickOutside