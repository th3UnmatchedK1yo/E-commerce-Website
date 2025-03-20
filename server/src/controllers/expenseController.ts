import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
  req: Request,
  res: Response
): Promise<void> => {
    try{
        const ExpenseByCategorySummaryRaw = await prisma.expense
    }
        catch (error) {
            res.status(500).json({ message: "Error retrieving dashboard metrics" });
          }
    
}