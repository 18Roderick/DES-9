
const initialValues = {
    correo: '',
    password: ''
  
  }
  
  const validate = values => {
    const errors = {}
  
    if (!values.correo) {
      errors.correo = 'Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
      errors.correo = 'Correo no valido';
    }
  
    if (!values.password) {
      errors.password = 'Requerido';
    } 
  
    return errors
  }
  
  
  export default {
    initialValues,
    validate
  }