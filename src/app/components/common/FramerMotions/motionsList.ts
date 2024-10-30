export const ulVariants = {
  open: { opacity: 1, transition: { duration: 0.5 }, pointerEvents: 'auto' as const, zIndex: 1 },
  closed: { opacity: 0, transition: { duration: 0.5 }, pointerEvents: 'none' as const, zIndex: -10 },
};

export const liVariants = {
  open: { marginTop: '0', duration: 0 },
  closed: { marginTop: '-50px', duration: 0 },
};
