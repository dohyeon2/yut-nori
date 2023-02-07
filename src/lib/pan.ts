import Kan from "@/lib/Kan";
import User from "@/lib/User";

export default class Pan {
  private kans: Kan[];
  private users: User[];
  constructor({
    kans,
    users,
  }: { kans?: Pan["kans"]; users?: Pan["users"] } = {}) {
    this.kans = kans || [];
    this.users = users || [];
  }
}
