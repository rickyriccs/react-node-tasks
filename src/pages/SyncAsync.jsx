import React from "react";

const SyncAsync = () => {
    console.log("1. Start");

    function syncTask() {
        for (let i = 0; i < 1000000000; i++) {} // Blocking loop
        console.log("2. Synchronous Task Done");
    }

    function asyncTask() {
        setTimeout(() => {
            console.log("3. Asynchronous Task Done");
        }, 1000);
    }

    syncTask();
    asyncTask();

    console.log("4. End");
    return (
        <div
            style={{ padding: '30px', backgroundColor: 'lightblue' }}
        >
            Check Console
        </div>
    );
};

export default SyncAsync;
