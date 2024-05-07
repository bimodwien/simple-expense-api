"use strict";

import { Router } from "express";
import ExpensesController from "../controllers/ExpensesController";

const router = Router();

//expense
router.get("/expenses", ExpensesController.showList);
router.get("/expenses/:id", ExpensesController.showDetail);
router.post("/expenses", ExpensesController.createExpense);
router.put("/expenses/:id", ExpensesController.editExpense);
router.delete("/expenses/:id", ExpensesController.deleteExpense);

//total

export default router;
