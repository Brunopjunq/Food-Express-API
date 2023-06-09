import { ApplicationError } from "../types/protocol-error-type.js";

export function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}