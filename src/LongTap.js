import { createGesture } from '@ionic/vue';

export default {
    mounted(el, {handler}) {
        let timeout;

        const clearGestureTimeout = () => {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
        };

        const gesture = createGesture({
            el,
            threshold: 0,
            onStart: e => {
                clearGestureTimeout();					
                timeout = setTimeout(() => {
                    timeout = undefined;
                    handler(e);
                }, 500);
            },
            onMove: detail => {
                if (detail.deltaX <= 10 && detail.deltaY <= 10) {
                    return;
                }
                clearGestureTimeout();
            },
            onEnd: () => {
                clearGestureTimeout();
            },
        });

        gesture.enable();
    }
};

