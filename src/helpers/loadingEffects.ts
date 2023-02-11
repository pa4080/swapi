export function loadingEnable(): void {
  const trigger = sessionStorage.getItem("SS_LOADING");
  console.log("loadingEnable:", trigger);

  if (trigger === "true") {
    document.body.classList.add("loading");
    // setTimeout(() => {
    document.body.classList.add("loading-show");
    // }, 0);
  }
}

export function loadingDisable(): void {
  const trigger = sessionStorage.getItem("SS_LOADING");
  console.log("loadingDisable:", trigger);

  if (trigger === "false") {
    document.body.classList.remove("loading-show");
    setTimeout(() => {
      document.body.classList.remove("loading");
    }, 2000);
  }
}
