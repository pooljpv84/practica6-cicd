# Dockerizar una app con React
Consumir API De Marvel

### Autores:
- Paul Velasco
- Jhony Llano

## Pasos a seguir

Instalacion:

```bash
$ docker build https://github.com/pooljpv84/marvel.git#main -t marvel:0.1
```

Ver imagen:

```bash
$ docker images
```

Ejecutar docker:

```bash
$ docker run -d -p 3000:3000 --name marvel marvel:0.1
```

Ver ejecucion:

```bash
$ docker ps
```
Ver aplicación:

http://localhost:3000
