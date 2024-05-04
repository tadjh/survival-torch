import {
  addEmote,
  attachPtfx,
  detachPtfx,
  getHandles,
} from "./lib/immersive-animations";
import {
  AnimFlags,
  AnimHandles,
  AnimOptions,
  PedBoneId,
} from "./lib/immersive-animations/types";

const torchEmotes: { [key: string]: AnimOptions } = {
  // For use with "prop_survival_torch" that doesn't have a particle fx extension on the archetype definition
  // My custom animation library handles spawning the particle effect to allow players to extinguish the torch
  torch: {
    dictionary: "anim@heists@humane_labs@finale@keycards",
    name: "ped_b_enter_loop",
    type: "single",
    flag:
      AnimFlags.AF_LOOPING + AnimFlags.AF_UPPERBODY + AnimFlags.AF_SECONDARY,
    prop: {
      model: "prop_survival_torch",
      bone: PedBoneId.PH_R_Hand,
      pos: { x: -0.27, y: 1.05, z: 0.59 },
      rot: { x: 120.0, y: 10.0, z: 0.0 },
      particle: {
        asset: "core",
        name: "ent_amb_torch_fire",
        offset: { x: 0.0, y: 0.0, z: 2.0 },
        rotation: { x: 0.0, y: 0.0, z: 0.0 },
        scale: 1.0,
        invert: { x: false, y: false, z: false },
      },
    },
  },
  // For use with "prop_survival_torch" that has a particle fx extension on the archetype definition
  torch2: {
    dictionary: "anim@heists@humane_labs@finale@keycards",
    name: "ped_b_enter_loop",
    type: "single",
    flag:
      AnimFlags.AF_LOOPING + AnimFlags.AF_UPPERBODY + AnimFlags.AF_SECONDARY,
    prop: {
      model: "prop_survival_torch2",
      bone: PedBoneId.PH_R_Hand,
      pos: { x: -0.27, y: 1.05, z: 0.59 },
      rot: { x: 120.0, y: 10.0, z: 0.0 },
    },
  },
};

// Register torch emotes with animation resource

for (const key in torchEmotes) {
  if (Object.prototype.hasOwnProperty.call(torchEmotes, key)) {
    addEmote(key, torchEmotes[key]);
  }
}

// Examples of turning torch on and off

function findTorchAndTurnOn() {
  if (!getHandles().particleHandle) {
    attachPtfx(getHandles().propHandle, torchEmotes["torch"].prop!.particle!);
  }
}

function findTorchAndTurnOff() {
  if (getHandles().particleHandle) {
    detachPtfx(getHandles());
  }
}

RegisterCommand("torch:on", findTorchAndTurnOn, false);

RegisterCommand("torch:off", findTorchAndTurnOff, false);

setTick(() => {
  if (IsControlJustPressed(0, 174)) {
    findTorchAndTurnOn();
  } else if (IsControlJustPressed(0, 175)) {
    findTorchAndTurnOff();
  }
});

