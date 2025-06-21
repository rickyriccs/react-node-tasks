import React from 'react';

function EventBubbling() {
    const handleParentClick = () => {
        console.log('Parent clicked');
    };

    const handleChildClick = (e) => {
        console.log('Child clicked');
        // Uncomment to stop bubbling:
        // e.stopPropagation();
    };

    return (
        <div
            onClick={handleParentClick}
            style={{ padding: '30px', backgroundColor: 'lightblue' }}
        >
            Parent Div
            <button
                onClick={handleChildClick}
                style={{ margin: '20px', padding: '10px', backgroundColor: 'lightcoral' }}
            >
                Click Me
            </button>
        </div>
    );
}

export default EventBubbling;
