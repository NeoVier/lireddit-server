"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = void 0;
const validatePassword = (password) => {
    if (password.length <= 3) {
        return [{ field: "password", message: "length must be greater than 3" }];
    }
    return null;
};
exports.validatePassword = validatePassword;
//# sourceMappingURL=validatePassword.js.map