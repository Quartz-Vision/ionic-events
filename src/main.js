import VueEventsHelper from '@quartz-vision/vue-events-helper';
const quartz = new VueEventsHelper('quartz');

import LongTap from './LongTap.js';
quartz.register('long-tap', LongTap);


export default quartz;

