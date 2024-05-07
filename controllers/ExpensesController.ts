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
      res.send({ message: "Internal Server Error" }).status(500);
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

  static createExpense(req: Request, res: Response) {
    try {
      const data = {
        name: req.body.name as string,
        nominal: Number(req.body.nominal) as number,
        category: req.body.category as string,
      };
      const id = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
      const newData = { id, ...data };
      expenses.push(newData);
      res.status(201).send({
        message: "Data insert success",
        data: newData,
      });
    } catch (error) {
      res.send({ message: "Internal Server Error" }).status(500);
    }
  }

  static editExpense(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = {
        name: req.body.name as string,
        nominal: Number(req.body.nominal) as number,
        category: req.body.category as string,
      };
      const idx = expenses.findIndex((exp) => {
        return exp.id === Number(id);
      });
      if (idx === -1) {
        return res.status(404).send({ message: "Data not found" });
      } else {
        expenses[idx] = { ...expenses[idx], ...data };
        res.status(201).send({
          message: "Successfully change data",
          data: expenses[idx],
        });
      }
    } catch (error) {
      res.send({ message: "Internal Server Error" }).status(500);
    }
  }

  static deleteExpense(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const idx = expenses.findIndex((exp) => {
        return exp.id === Number(id);
      });
      if (idx === -1) {
        res.status(404).send({ message: "Data not found" });
      } else {
        expenses.splice(idx, 1);
        res.status(201).send({
          message: "Succesfully delete data",
        });
      }
    } catch (error) {
      res.send({ message: "Internal Server Error" }).status(500);
    }
  }

  static totalByDateRange(req: Request, res: Response) {}

  static totalByCategory(req: Request, res: Response) {}
}

export default ExpensesController;
