"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const validatePassword_1 = require("./validatePassword");
const validateRegister = (options) => {
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
    const passwordErrors = validatePassword_1.validatePassword(options.password);
    if (passwordErrors) {
        return passwordErrors;
    }
    return null;
};
exports.validateRegister = validateRegister;
//# sourceMappingURL=validateRegister.js.map