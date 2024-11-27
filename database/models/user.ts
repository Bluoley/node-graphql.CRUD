import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idUser: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nameUser: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstLastNameUser: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  secondLastNameUser: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  addressUser: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phoneUser: string;
}
