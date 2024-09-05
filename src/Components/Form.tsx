import { useState } from "react"
import { categories } from "../data/db"

export default function Form() {

  const [activity,setActivity] = useState({
    category: 1, 
    name: '',
    calories:0,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setActivity((prevActivity) => ({
      ...prevActivity,
      [name]:  name === 'calories' ? +value : value, // Convierte a número si es 'calories',
    }));
    console.log(activity)
  }

  return (
    <form action="" className="form">
        <div className="form__form-item">
            <label htmlFor="category">Categoría</label>
            <select name="category" id="category" value={activity.category} onChange={handleChange}>
              {categories.map(item=>(
                <option value={item.id} key={item.id}>{item.name}</option>
              ))}
            </select>
        </div>
        <div className="form__form-item">
            <label htmlFor="name">Actividad</label>
            <input type="text" id="name" name="name" placeholder="Ej: bicicleta, andar, manzana, pesas..." onChange={handleChange}/>
        </div>
        <div className="form__form-item">
            <label htmlFor="">Calorías</label>
            <input type="number" name="calories" onChange={handleChange}/>
        </div>
        <div className="form__form-item">
          <input type="submit" value="Guardar" />
        </div>
    </form>
  )
}
