import Usuario from "../models/Usuario";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Usuario)
class UsuarioRepository extends Repository<Usuario> {
  public async ListAll(): Promise<Usuario[] | null> {
    return (await this.ListAll()) || null;
  }
}
