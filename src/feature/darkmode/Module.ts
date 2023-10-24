export const bodyThemeColor = (flag = false) => {
  const body = document.body;
  const className = "_body_dark_mode";

  if (flag) body.classList.add(className);
  else body.classList.remove(className);
};
