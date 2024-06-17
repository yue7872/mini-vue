let activeEffect: Function;

export function getActiveEffect() {
  return activeEffect;
}
export function effect(fn: Function): void {
  activeEffect = fn;
  fn();
}
