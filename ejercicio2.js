function sumaDesdeHasta(n, f) {
    if (n > f) {
      console.error("El valor inicial (n) debe ser menor o igual al valor final (f).");
      return undefined; // Otra opción es lanzar una excepción.
    }
  
    let suma = 0;
  
    for (let i = n; i <= f; i++) {
      suma += i;
    }
  
    return suma;
  }
  
  // Ejemplo de uso:
  let resultado = sumaDesdeHasta(50, 1000);
  console.log("La suma desde 50 hasta 1000 es: " + resultado);
  