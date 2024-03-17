
import { pool } from '@/app/utils/database';
import { NextResponse } from 'next/server';
export async function GET() {
  try {
   
    const queryAsync = async (sql, values) => {
      return pool.query(sql, values); 
    };

    const data = await queryAsync(`SELECT comidas.id_comidas, comidas.nombre_plato, 
      categorias.nombre_categoria, departamentos.nombre_departamento, 
      comidas.descripcion, comidas.ingredientes, comidas.src_imagen 
      FROM comidas 
      JOIN categorias ON comidas.id_categoria = categorias.id_categoria 
      JOIN departamentos ON comidas.id_departamento = departamentos.id_departamento 
      ORDER BY comidas.id_comidas ASC;`);

 
    return new NextResponse(JSON.stringify(data.rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
