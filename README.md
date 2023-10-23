#Ej 1 

#a
def contar_lineas (nombre_archivo : str) -> int:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readline#Ej 1 

#a
def contar_lineas (nombre_archivo : str) -> int:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readlines()
    return len(lineas)

#print(contar_lineas('/home/clinux01/Escritorio/prueba.txt'))

#b
def existe_palabra (palabra:str, nombre_archivo:str) -> bool:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readlines()
    for posicion in lineas:

        if(palabra in posicion):
            return True
        
    return False     

#print(existe_palabra("hola",'/home/clinux01/Escritorio/prueba.txt'))



#c 
def cantidadApariciones (palabra:str, nombre_archivo:str) -> int:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readlines()
    contador:int = 0 
    for posicion in lineas:
        for i in posicion:
            if(palabra in i):
                contador += 1

    return contador 

#print(cantidadApariciones("1",'/home/clinux01/Escritorio/prueba.txt'))        


#Ejercicio 2 
def clonarSinComentar (nombre_archivo:str) -> str: 
    archivo = open(nombre_archivo,'r')
    lineas:list =  archivo.readlines()
    archivoSinComent = open('/home/clinux01/Escritorio/clonadoSinComentario.py','w')
    for posicion in lineas:
        if posicion.strip()[0] == '#':
            lineas.remove(posicion)

    archivoSinComent.writelines(lineas)
    return archivoSinComent

#print(clonarSinComentar("/home/clinux01/Escritorio/prueba.py"))

#Ejercicio 3
def ordenReverso (nombre_archivo:str) -> str:
    archivo = open(nombre_archivo,'r')
    lineas:list =  archivo.readlines()
    reverso = open('/home/clinux01/Escritorio/reverso.txt','w')
    while len(lineas) > 0:
        linea = lineas[len(lineas)-1]
        reverso.writelines(linea)
        lineas.remove(linea)
    return reverso
#print(ordenReverso("/home/clinux01/Escritorio/prueba.py"))

#Ejercicio 4
def agregoFraseFinal (documento:str, frase: str) -> str:
    archivo = open(documento,'a')
    archivo.write(frase)
    return documento
#print(agregoFraseFinal ("/home/clinux01/Escritorio/prueba.py", "bien"))

#Ejercicio 5
def agregoFraseComienzo (documento:str, frase: str) -> str:
    archivo = open(documento,'r')
    lineas:list =  archivo.readlines()
    archivo.close()
    archivo = open (documento,'w')
    lineas.insert(0,frase)
    archivo.writelines(lineas)
    return documento
#print(agregoFraseComienzo ("/home/clinux01/Escritorio/prueba.py", "Jose \n"))


#Ejercicio 6
def noBinarios (documento:str)-> [str]:
    archivo = open(documento,'rb')
    lista:[str]= []
    lineas:list =  archivo.readlines()
    for linea in lineas:
        if len(linea)>=5:
          for i in linea:
            lista.append(chr(i))
    return lista

print(noBinarios ("/home/clinux01/Escritorio/prueba.py"))s()
    return len(lineas)

#print(contar_lineas('/home/clinux01/Escritorio/prueba.txt'))

#b
def existe_palabra (palabra:str#Ej 1 

#a
def contar_lineas (nombre_archivo : str) -> int:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readlines()
    return len(lineas)

#print(contar_lineas('/home/clinux01/Escritorio/prueba.txt'))

#b
def existe_palabra (palabra:str, nombre_archivo:str) -> bool:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readlines()
    for posicion in lineas:

        if(palabra in posicion):
            return True
        
    return False     

#print(existe_palabra("hola",'/home/clinux01/Escritorio/prueba.txt'))



#c 
def cantidadApariciones (palabra:str, nombre_archivo:str) -> int:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readlines()
    contador:int = 0 
    for posicion in lineas:
        for i in posicion:
            if(palabra in i):
                contador += 1

    return contador 

#print(cantidadApariciones("1",'/home/clinux01/Escritorio/prueba.txt'))        


#Ejercicio 2 
def clonarSinComentar (nombre_archivo:str) -> str: 
    archivo = open(nombre_archivo,'r')
    lineas:list =  archivo.readlines()
    archivoSinComent = open('/home/clinux01/Escritorio/clonadoSinComentario.py','w')
    for posicion in lineas:
        if posicion.strip()[0] == '#':
            lineas.remove(posicion)

    archivoSinComent.writelines(lineas)
    return archivoSinComent

#print(clonarSinComentar("/home/clinux01/Escritorio/prueba.py"))

#Ejercicio 3
def ordenReverso (nombre_archivo:str) -> str:
    archivo = open(nombre_archivo,'r')
    lineas:list =  archivo.readlines()
    reverso = open('/home/clinux01/Escritorio/reverso.txt','w')
    while len(lineas) > 0:
        linea = lineas[len(lineas)-1]
        reverso.writelines(linea)
        lineas.remove(linea)
    return reverso
#print(ordenReverso("/home/clinux01/Escritorio/prueba.py"))

#Ejercicio 4
def agregoFraseFinal (documento:str, frase: str) -> str:
    archivo = open(documento,'a')
    archivo.write(frase)
    return documento
#print(agregoFraseFinal ("/home/clinux01/Escritorio/prueba.py", "bien"))

#Ejercicio 5
def agregoFraseComienzo (documento:str, frase: str) -> str:
    archivo = open(documento,'r')
    lineas:list =  archivo.readlines()
    archivo.close()
    archivo = open (documento,'w')
    lineas.insert(0,frase)
    archivo.writelines(lineas)
    return documento
#print(agregoFraseComienzo ("/home/clinux01/Escritorio/prueba.py", "Jose \n"))


#Ejercicio 6
def noBinarios (documento:str)-> [str]:
    archivo = open(documento,'rb')
    lista:[str]= []
    lineas:list =  archivo.readlines()
    for linea in lineas:
        if len(linea)>=5:
          for i in linea:
            lista.append(chr(i))
    return lista

print(noBinarios ("/home/clinux01/Escritorio/prueba.py")), nombre_archivo:str) -> bool:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readlines()
    for posicion in lineas:

        if(palabra in posicion):
            return True
        
    return False     

#print(existe_palabra("hola",'/home/clinux01/Escritorio/prueba.txt'))



#c 
def cantidadApariciones (palabra:str, nombre_archivo:str) -> int:
    archivo = open(nombre_archivo, 'r')
    lineas:list =  archivo.readlines()
    contador:int = 0 
    for posicion in lineas:
        for i in posicion:
            if(palabra in i):
                contador += 1

    return contador 

#print(cantidadApariciones("1",'/home/clinux01/Escritorio/prueba.txt'))        


#Ejercicio 2 
def clonarSinComentar (nombre_archivo:str) -> str: 
    archivo = open(nombre_archivo,'r')
    lineas:list =  archivo.readlines()
    archivoSinComent = open('/home/clinux01/Escritorio/clonadoSinComentario.py','w')
    for posicion in lineas:
        if posicion.strip()[0] == '#':
            lineas.remove(posicion)

    archivoSinComent.writelines(lineas)
    return archivoSinComent

#print(clonarSinComentar("/home/clinux01/Escritorio/prueba.py"))

#Ejercicio 3
def ordenReverso (nombre_archivo:str) -> str:
    archivo = open(nombre_archivo,'r')
    lineas:list =  archivo.readlines()
    reverso = open('/home/clinux01/Escritorio/reverso.txt','w')
    while len(lineas) > 0:
        linea = lineas[len(lineas)-1]
        reverso.writelines(linea)
        lineas.remove(linea)
    return reverso
#print(ordenReverso("/home/clinux01/Escritorio/prueba.py"))

#Ejercicio 4
def agregoFraseFinal (documento:str, frase: str) -> str:
    archivo = open(documento,'a')
    archivo.write(frase)
    return documento
#print(agregoFraseFinal ("/home/clinux01/Escritorio/prueba.py", "bien"))

#Ejercicio 5
def agregoFraseComienzo (documento:str, frase: str) -> str:
    archivo = open(documento,'r')
    lineas:list =  archivo.readlines()
    archivo.close()
    archivo = open (documento,'w')
    lineas.insert(0,frase)
    archivo.writelines(lineas)
    return documento
#print(agregoFraseComienzo ("/home/clinux01/Escritorio/prueba.py", "Jose \n"))


#Ejercicio 6
def noBinarios (documento:str)-> [str]:
    archivo = open(documento,'rb')
    lista:[str]= []
    lineas:list =  archivo.readlines()
    for linea in lineas:
        if len(linea)>=5:
          for i in linea:
            lista.append(chr(i))
    return lista

print(noBinarios ("/home/clinux01/Escritorio/prueba.py"))
