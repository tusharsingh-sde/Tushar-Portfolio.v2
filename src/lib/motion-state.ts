/**
 * Shared motion state, read every frame by the 3D scene.
 * Written from window listeners attached on the client only.
 */
export const pointerState = {
  /** smoothed normalized pointer (-1..1) */
  x: 0,
  y: 0,
  /** raw target from the latest pointermove */
  tx: 0,
  ty: 0,
};

export const scrollState = {
  /** whole-page scroll progress 0..1 */
  progress: 0,
};

export function attachPointer(): () => void {
  if (typeof window === "undefined") return () => {};
  const onMove = (e: PointerEvent) => {
    pointerState.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointerState.ty = -(e.clientY / window.innerHeight) * 2 + 1;
  };
  window.addEventListener("pointermove", onMove, { passive: true });
  return () => window.removeEventListener("pointermove", onMove);
}

export function attachScroll(): () => void {
  if (typeof window === "undefined") return () => {};
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollState.progress = max > 0 ? window.scrollY / max : 0;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener("scroll", onScroll);
}
