import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("usuarios")
class Usuario {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  imagem_perfil: string;

  @Column("time")
  data_nascimento: Date;

  @Column("bool")
  exibir_data_nascimento: boolean;

  @Column("bool")
  streamer: boolean;

  @Column()
  link: string;
}

export default Usuario;
