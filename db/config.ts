import { column, defineDb, defineTable } from 'astro:db';

const Empleados = {
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    surname: column.text(),
    age: column.number(),

  }
}


// https://astro.build/db/config
export default defineDb({
  tables: {}
});
