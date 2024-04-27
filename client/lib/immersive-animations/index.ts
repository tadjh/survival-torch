import { AnimationHandles, AnimationOptions, ParticleOptions } from "./types";

export function getHandles(): AnimationHandles {
  return globalThis.exports["immersive-animations"].getHandles();
}

export function setHandles(handles: AnimationHandles) {
  return globalThis.exports["immersive-animations"].setHandles(handles);
}

export function attachPtfx(
  propHandle: number,
  options: ParticleOptions
): AnimationHandles {
  return globalThis.exports["immersive-animations"].attachPtfx(
    propHandle,
    options
  );
}

export function detatchPtfx(handles: AnimationHandles): AnimationHandles {
  return globalThis.exports["immersive-animations"].detatchPtfx(handles);
}

export function getEmotes(): Map<string, AnimationOptions> {
  return globalThis.exports["immersive-animations"].getEmotes();
}

export function hasEmote(key: string): boolean {
  return globalThis.exports["immersive-animations"].hasEmote(key);
}

export function addEmote(key: string, value: AnimationOptions): boolean {
  return globalThis.exports["immersive-animations"].addEmote(key, value);
}
