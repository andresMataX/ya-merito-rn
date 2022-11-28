export const validarEmail = (valor: string) => {
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)) {
    return true;
  } else {
    return false;
  }
}