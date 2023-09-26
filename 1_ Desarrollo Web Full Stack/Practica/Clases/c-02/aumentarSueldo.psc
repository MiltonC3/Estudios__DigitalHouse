Algoritmo aumentarSueldo
	Escribir "Escribe el nombre del trabajador:"
	Leer nombre
	Escribir "Escribe el apellido del trabajador:"
	Leer apellido
	Escribir "El sueldo del trabajador:"
	Leer sueldo
	
	Escribir "Los datos son"
	
	Escribir nombre
	Escribir apellido
	
	Si sueldo > 33000
		sueldo = sueldo + sueldo * (20/100)
		Escribir "Se le aumentó el sueldo un 20%, asi que el sueldo actual es"
		Escribir sueldo
	SiNo
		sueldo = sueldo + sueldo * (15/100)
		Escribir "Se le aumentó el sueldo un 15%, así que el sueldo actual es:"
		Escribir sueldo
	FinSi
FinAlgoritmo
