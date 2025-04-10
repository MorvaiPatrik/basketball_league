import { Match } from "./Match";

export interface User {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  password: string;
  tasks: Match[];
  completed_tasks: Match[];
}