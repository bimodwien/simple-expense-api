"use strict";
import { Request, Response } from "express";
import expenses from "../model/expenses";

class ExpensesController {
  static showList(req: Request, res: Response) {
    try {
      const allExpenses = expenses.map((expence) => {
        return expence;
      });
      res.status(200).send({
        message: "Fetch all expenses",
        data: allExpenses,
      });
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }

  static showDetail(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const expense = expenses.find((exp) => {
        return exp.id === Number(id);
      });

      if (!expense) {
        return res.status(404).send({
          message: "Data Not Found",
        });
      } else {
        res.status(200).send({
          message: "Fetch data with id",
          data: expense,
        });
      }
    } catch (error) {
      res.send({ message: "Internal Server Error" }).status(500);
    }
  }

  static createExpense(req: Request, res: Response) {}

  static editExpense(req: Request, res: Response) {}

  static deleteExpense(req: Request, res: Response) {}

  static totalByDateRange(req: Request, res: Response) {}

  static totalByCategory(req: Request, res: Response) {}
}

export default ExpensesController;
