import VueEventsHelper from '@quartz-vision/vue-events-helper';
const quartz = new VueEventsHelper('quartz');

import longTap from './long-tap.js';
quartz.register('long-tap', longTap);


export default quartz;

