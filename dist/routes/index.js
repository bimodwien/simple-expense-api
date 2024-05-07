"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExpensesController_1 = __importDefault(require("../controllers/ExpensesController"));
const router = (0, express_1.Router)();
router.get("/expense", ExpensesController_1.default.showList);
router.get("/expense/:id", ExpensesController_1.default.showDetail);
router.post("/expense", ExpensesController_1.default.createExpense);
router.put("/expense/:id", ExpensesController_1.default.editExpense);
router.delete("/expense:/id", ExpensesController_1.default.deleteExpense);
exports.default = router;
