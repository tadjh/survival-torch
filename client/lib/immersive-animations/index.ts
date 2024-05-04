import {
  AnimHandles,
  AnimOptions,
  ParticleHandles,
  PropHandles,
  PtfxOptions,
} from "./types";

export function getHandles(): AnimHandles {
  return globalThis.exports["immersive-animations"].getHandles();
}

export function setHandles(nextHandles: Partial<AnimHandles>) {
  return globalThis.exports["immersive-animations"].setHandles(nextHandles);
}

export async function attachPtfx(
  propHandle: number,
  options: PtfxOptions
): Promise<ParticleHandles | false> {
  return globalThis.exports["immersive-animations"].attachPtfx(
    propHandle,
    options
  );
}

export function detachPtfx(
  prevHandles: Omit<PropHandles, "propModel">
): ParticleHandles | false {
  return globalThis.exports["immersive-animations"].detachPtfx(prevHandles);
}

export function getEmotes(): string {
  return globalThis.exports["immersive-animations"].getEmotes();
}

export function hasEmote(key: string): boolean {
  return globalThis.exports["immersive-animations"].hasEmote(key);
}

export function addEmote(key: string, value: AnimOptions): boolean {
  return globalThis.exports["immersive-animations"].addEmote(key, value);
}
