export const MODAL_OPEN = 'MODAL_OPEN';

export function openModal(isOpen, modal, id) {
    return {
        type: MODAL_OPEN,
        isOpen,
        modal,
        id,
    };
}