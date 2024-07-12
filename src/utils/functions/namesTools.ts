export const getInitials = (displayName: string) => {
  if (displayName) {
    return displayName
      .split(" ")
      .map((word) => word[0])
      .join("");
  } else {
    return "";
  }
};
