console.log("1. Start");

setTimeout(() => {
    console.log("2. Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise callback");
});

console.log("4. End");

// Output
// 1. Start
// 4. End
// 3. Promise callback
// 2. Timeout callback


// CALL STACK
// │
// ├── console.log("1. Start") → prints
// ├── setTimeout(...)         → scheduled (task queue)
// ├── Promise.resolve().then(...) → scheduled (microtask queue)
// ├── console.log("4. End")   → prints
// │
// Event loop:
//     1. Executes microtask: Promise → prints 3
// 2. Executes task queue: Timeout → prints 2
