
export default function Form() {
  return (
    <form action="" className="form">
        <div className="form__form-item">
            <label htmlFor="">Categoría</label>
            <input type="text" />
        </div>
        <div className="form__form-item">
            <label htmlFor="">Actividad</label>
            <input type="text" />
        </div>
        <div className="form__form-item">
            <label htmlFor="">Calorías</label>
            <input type="text" />
        </div>
        <div className="form__form-item">
          <button>Guardar</button>
        </div>
    </form>
  )
}
