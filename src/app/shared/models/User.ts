import { Match } from "./Match";

export interface User {
  id: string;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  tasks: string[];
  completed_tasks: Match[];
}