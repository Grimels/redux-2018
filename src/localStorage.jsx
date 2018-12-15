export const loadState = () => {
  try {
    const localState = localStorage.getItem("state");
    if (localState) {
      return JSON.parse(localState);
    } else {
      return undefined;
    }
  } catch {
    return undefined;
  }
};

export const saveState = state => {
  localStorage.setItem("state", JSON.stringify(state));
};
