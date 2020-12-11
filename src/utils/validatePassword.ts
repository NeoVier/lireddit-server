export const validatePassword = (password: string) => {
  if (password.length <= 3) {
    return [{ field: "password", message: "length must be greater than 3" }];
  }

  return null;
};
