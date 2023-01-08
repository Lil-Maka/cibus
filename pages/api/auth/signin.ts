import { NextApiRequest, NextApiResponse } from "next";
import { createUserAccount } from "../../../api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      await createUserAccount(body);
      return res.status(200).end();
    } catch (error: any) {
      console.log(res, error);
    }
  }

  return res.status(404).end();
}
