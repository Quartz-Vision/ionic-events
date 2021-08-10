# ionic-events
A bunch of events on top of ionic's gestures

 - [installation](#installation)
 - [usage](#usage)
 - [events](#events)

## Installation
```console
npm i @quartz-vision/ionic-events
```

## Setup
```js
import Vue from "vue"
import ionicEvents from "@quartz-vision/ionic-events"

const app = createApp(myApp)
  .use(ionicEvents);
```

## Usage
```vue
<div v-quartz:<event name>="<handler>">
```


## Events
 - [long-tap](#long-tap)


### long-tap
```vue
<div v-quartz:long-tap="onLongTap">
```
> Tap time: `500ms`
