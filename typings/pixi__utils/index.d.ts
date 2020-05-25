/// <reference types="pixi.js-legacy" />
declare module "@pixi/utils" {
    import { utils } from "pixi.js-legacy";
    export class EventEmitter extends utils.EventEmitter {}
}