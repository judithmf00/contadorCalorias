import { useState,ChangeEvent, FormEvent } from "react"
import { categories } from "../data/db"
import { Activity } from "../types";

export default function Form() {

  const [activity,setActivity] = useState<Activity>({
    category: 1, 
    name: '',
    calories:0,
  })

  const isValidForm =()=>{
    const {name, calories} = activity;
    return name != "" && calories > 0 ?  true : false
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { id, value } = e.target;
    isValidForm()
    
    setActivity((prevActivity) => ({
      ...prevActivity,
      [id]:  id === 'calories' || id === 'category' ? +value : value, // Convierte a número si es 'calories',
    }));
    
  }
  
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
            <input type="number" id="calories" onChange={handleChange} value={activity.calories}/>
        </div>
        <div className="form__form-item">
          <input type="submit" value={activity.category == 1 ? "Guardar comida" : "Guardar ejercicio"} className="disabled:opacity-50" disabled={!isValidForm()} />
        </div>
    </form>
  )
}
