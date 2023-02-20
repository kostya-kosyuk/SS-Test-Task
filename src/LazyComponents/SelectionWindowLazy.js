import React from 'react';

const SelectionWindow = React.lazy(() => import('../Components/SelectionWindow'));

export default function SelectionWindowLazy({ isModalOpen, handleToggleModal }) {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <SelectionWindow
                isModalOpen={isModalOpen}
                handleToggleModal={handleToggleModal}
            />
        </React.Suspense>
    );
}