"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.today = exports.GetTokenData = exports.GenerateToken = exports.HashManager = exports.FollowSystem = exports.Recipes = exports.User = void 0;
const bcryptjs_1 = require("bcryptjs");
const jwt = __importStar(require("jsonwebtoken"));
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
exports.User = User;
class Recipes {
    constructor(id, title, description, creation, user_id) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.creation = creation;
        this.user_id = user_id;
    }
}
exports.Recipes = Recipes;
class FollowSystem {
    constructor(id, user_id, user_follow) {
        this.id = id;
        this.user_id = user_id;
        this.user_follow = user_follow;
    }
}
exports.FollowSystem = FollowSystem;
class HashManager {
    constructor() {
        this.generateHash = (plainText) => {
            const cost = 12;
            const salt = (0, bcryptjs_1.genSaltSync)(cost);
            const cypherText = (0, bcryptjs_1.hashSync)(plainText, salt);
            return cypherText;
        };
        this.compareHash = (plainText, cypherText) => {
            return (0, bcryptjs_1.compareSync)(plainText, cypherText);
        };
    }
}
exports.HashManager = HashManager;
const GenerateToken = (id) => {
    return jwt.sign({ id }, "r2d2c3po", { expiresIn: "1h" });
};
exports.GenerateToken = GenerateToken;
const GetTokenData = (token) => {
    try {
        return jwt.verify(token, "r2d2c3po");
    }
    catch (error) {
        return null;
    }
};
exports.GetTokenData = GetTokenData;
const date = new Date();
const year = date.getFullYear();
const mounth = date.getMonth();
const day = date.getDay();
exports.today = `${day}/${mounth}/${year}`;
//# sourceMappingURL=types.js.map