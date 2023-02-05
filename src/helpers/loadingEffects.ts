export function loadingEnable(): void {
  document.body.classList.add("loading");
  setTimeout(() => {
    document.body.classList.add("loading-show");
  }, 0);
}

export function loadingDisable(): void {
  document.body.classList.remove("loading-show");
  setTimeout(() => {
    document.body.classList.remove("loading");
  }, 800);
}
