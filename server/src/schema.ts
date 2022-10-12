// server/src/schema.ts
import { builder } from "./builder";

// 👇 Added the models here
import "./models/User";
import "./models/Note";

export const schema = builder.toSchema({});
