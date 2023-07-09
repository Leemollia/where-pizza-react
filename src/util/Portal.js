import { useEffect, useState } from "react";

import { createPortal } from "react-dom";

import { useDispatch } from "react-redux";
import { hideModal } from "../store/slice/modalCardSlice";

const Portal = ({ children, className = '', el = 'div' }) => {
    const dispatch = useDispatch();
    const container = document.createElement(el);
    
    container.classList.add(className)
    container.id = 'modal-menu';

    useEffect(() => {
        document.body.appendChild(container)
        // modal(container).show();

        // container.addEventListener('hidden', () => {
        //     dispatch(hideModal());
        // })

        return () => {
            // modal(container).$destroy();
            document.body.removeChild(container)
        }
    }, [])

    return createPortal(children, container)
}
export default Portal