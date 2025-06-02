import { Sequelize }  from  'sequelize';

export const sequelize = new Sequelize('ums', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
export const connectDB = async () => {
  sequelize.sync({force:false}).then(()=>{
    console.log('Connection has been established successfully.');
  }).catch(error=>{
    console.error('Unable to connect to the database:', error);
  });
}
