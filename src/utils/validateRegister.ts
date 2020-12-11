import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";
import { validatePassword } from "./validatePassword";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "length must be greater than 2",
      },
    ];
  }

  if (options.username.includes("@")) {
    return [{ field: "username", message: "usernames cannot have @" }];
  }

  if (!options.email.includes("@")) {
    return [{ field: "email", message: "invalid email" }];
  }

  const passwordErrors = validatePassword(options.password);
  if (passwordErrors) {
    return passwordErrors;
  }

  return null;
};
