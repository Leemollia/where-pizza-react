import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import UIkit from "uikit";
import { hideModal } from "../store/slice/modalCardSlice";

const Portal = ({ children, className, el = 'div' }) => {
    const dispatch = useDispatch();
    const [container] = useState(document.createElement(el))

    if (className) container.classList.add(className)

    useEffect(() => {
        document.body.appendChild(container)
        const modal = UIkit.modal(container);
        modal.show();
        container.addEventListener('hidden', () => { 
            dispatch(hideModal());
        })

        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return createPortal(children, container)
}
export default Portal