export const MODAL_OPEN = 'MODAL_OPEN';

export function openModal(isOpen, modal) {
    return {
        type: MODAL_OPEN,
        isOpen,
        modal,
    };
}