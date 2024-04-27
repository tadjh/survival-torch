import { AnimHandles, AnimOptions, PtfxOptions } from "./types";

export function getHandles(): AnimHandles {
  return globalThis.exports["immersive-animations"].getHandles();
}

export function setHandles(handles: AnimHandles) {
  return globalThis.exports["immersive-animations"].setHandles(handles);
}

export function attachPtfx(
  propHandle: number,
  options: PtfxOptions
): AnimHandles {
  return globalThis.exports["immersive-animations"].attachPtfx(
    propHandle,
    options
  );
}

export function detachPtfx(handles: AnimHandles): AnimHandles {
  return globalThis.exports["immersive-animations"].detachPtfx(handles);
}

export function getEmotes() {
  return globalThis.exports["immersive-animations"].getEmotes();
}

export function hasEmote(key: string): boolean {
  return globalThis.exports["immersive-animations"].hasEmote(key);
}

export function addEmote(key: string, value: AnimOptions): boolean {
  return globalThis.exports["immersive-animations"].addEmote(key, value);
}
