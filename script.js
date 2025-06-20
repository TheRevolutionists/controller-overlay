window.addEventListener('gamepadconnected', (event) => {
    console.log('Gamepad connected:', event.gamepad);
    pollGamepad();
});

function pollGamepad() {
    const gamepads = navigator.getGamepads();
    if (gamepads[0]) {
        const gp = gamepads[0];
        gp.buttons.forEach((btn, idx) => {
            if (btn.pressed) {
                console.log('Button pressed:', idx);
            }
        });
    }
    requestAnimationFrame(pollGamepad);
} 
