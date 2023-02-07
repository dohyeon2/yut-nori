import Mal from "@/lib/mal";

export default class User {
  private name: string;
  private id: string;
  private mals: Mal[];
  constructor({
    name = "unknown",
    id = "unknown",
    mals,
  }: {
    name: User["name"];
    id: User["id"];
    mals?: User["mals"];
  }) {
    this.name = name;
    this.id = id;
    this.mals = mals || [];
  }
}
