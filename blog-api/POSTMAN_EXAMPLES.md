# 📝 Ejemplos de Postman - Blog API CRUD

**URL Base:** `http://localhost:3000/api`

---

## 👥 USUARIOS (Users)

### 1️⃣ GET - Obtener todos los usuarios
```http
GET http://localhost:3000/api/usuarios
```
**Respuesta esperada (200):**
```json
[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "created_at": "2025-11-12T10:30:00.000Z"
  }
]
```

---

### 2️⃣ GET - Obtener usuario por ID
```http
GET http://localhost:3000/api/usuarios/1
```
**Respuesta esperada (200):**
```json
{
  "id": 1,
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "created_at": "2025-11-12T10:30:00.000Z"
}
```
**Si no existe (404):**
```json
{ "error": "Usuario no encontrado" }
```

---

### 3️⃣ POST - Crear nuevo usuario
```http
POST http://localhost:3000/api/usuarios
Content-Type: application/json

{
  "nombre": "María González",
  "email": "maria@example.com",
  "password": "miPassword123"
}
```
**Respuesta esperada (201):**
```json
{
  "id": 2,
  "nombre": "María González",
  "email": "maria@example.com"
}
```
⚠️ **Nota:** La contraseña se encripta con bcrypt (no se devuelve en la respuesta).

---

### 4️⃣ PUT - Actualizar usuario
```http
PUT http://localhost:3000/api/usuarios/1
Content-Type: application/json

{
  "nombre": "Juan Carlos Pérez",
  "email": "juancarlos@example.com"
}
```
**Respuesta esperada (200):**
```json
{ "message": "Usuario actualizado" }
```

---

### 5️⃣ DELETE - Eliminar usuario
```http
DELETE http://localhost:3000/api/usuarios/1
```
**Respuesta esperada (200):**
```json
{ "message": "Usuario eliminado" }
```

---

## 📂 CATEGORÍAS (Categories)

### 1️⃣ GET - Obtener todas las categorías
```http
GET http://localhost:3000/api/categorias
```
**Respuesta esperada (200):**
```json
[
  {
    "id": 1,
    "nombre": "Tecnología",
    "created_at": "2025-11-12T10:30:00.000Z"
  }
]
```

---

### 2️⃣ GET - Obtener categoría por ID
```http
GET http://localhost:3000/api/categorias/1
```
**Respuesta esperada (200):**
```json
{
  "id": 1,
  "nombre": "Tecnología",
  "created_at": "2025-11-12T10:30:00.000Z"
}
```

---

### 3️⃣ POST - Crear categoría
```http
POST http://localhost:3000/api/categorias
Content-Type: application/json

{
  "nombre": "Programación"
}
```
**Respuesta esperada (201):**
```json
{
  "id": 2,
  "nombre": "Programación"
}
```

---

### 4️⃣ PUT - Actualizar categoría
```http
PUT http://localhost:3000/api/categorias/1
Content-Type: application/json

{
  "nombre": "Tecnología e Innovación"
}
```
**Respuesta esperada (200):**
```json
{
  "message": "Categoria ha sido actualizada",
  "data": {
    "category": "..."
  }
}
```

---

### 5️⃣ DELETE - Eliminar categoría
```http
DELETE http://localhost:3000/api/categorias/1
```
**Respuesta esperada (200):**
```json
{ "message": "Categoria eliminada" }
```

---

## 🏷️ SUBCATEGORÍAS (Subcategories)

### 1️⃣ GET - Obtener todas las subcategorías
```http
GET http://localhost:3000/api/subcategorias
```
**Respuesta esperada (200):**
```json
{
  "message": "Subcategoria encontrada",
  "data": [
    {
      "id": 1,
      "nombre": "JavaScript",
      "id_categoria": 2,
      "created_at": "2025-11-12T10:30:00.000Z"
    }
  ]
}
```

---

### 2️⃣ GET - Obtener subcategoría por ID
```http
GET http://localhost:3000/api/subcategorias/1
```
**Respuesta esperada (200):**
```json
{
  "message": "Subcategoria encontrada",
  "data": {
    "id": 1,
    "nombre": "JavaScript",
    "id_categoria": 2,
    "created_at": "2025-11-12T10:30:00.000Z"
  }
}
```

---

### 3️⃣ POST - Crear subcategoría
```http
POST http://localhost:3000/api/subcategorias
Content-Type: application/json

{
  "nombre": "Python",
  "id_categoria": 2
}
```
**Respuesta esperada (201):**
```json
{
  "message": "Subcategoria añadida",
  "data": {
    "id": 2,
    "nombre": "Python",
    "id_categoria": 2
  }
}
```

---

### 4️⃣ PUT - Actualizar subcategoría
```http
PUT http://localhost:3000/api/subcategorias/1
Content-Type: application/json

{
  "nombre": "JavaScript ES6+"
}
```
**Respuesta esperada (200):**
```json
{
  "message": "Subcategoria actualizada con exito",
  "data": { ... }
}
```

---

### 5️⃣ DELETE - Eliminar subcategoría
```http
DELETE http://localhost:3000/api/subcategorias/1
```
**Respuesta esperada (200):**
```json
{ "message": "Subcategoria eliminada" }
```

---

## 💬 COMENTARIOS (Comments)

### 1️⃣ GET - Obtener todos los comentarios
```http
GET http://localhost:3000/api/comentarios
```
**Respuesta esperada (200):**
```json
[
  {
    "id": 1,
    "contenido": "Excelente blog!",
    "id_usuario": 1,
    "id_blog": 1,
    "created_at": "2025-11-12T10:30:00.000Z"
  }
]
```

---

### 2️⃣ GET - Obtener comentario por ID
```http
GET http://localhost:3000/api/comentarios/1
```
**Respuesta esperada (200):**
```json
{
  "id": 1,
  "contenido": "Excelente blog!",
  "id_usuario": 1,
  "id_blog": 1,
  "created_at": "2025-11-12T10:30:00.000Z"
}
```

---

### 3️⃣ GET - Obtener comentarios por Blog
```http
GET http://localhost:3000/api/comentarios/blog/1
```
**Respuesta esperada (200):**
```json
[
  {
    "id": 1,
    "contenido": "Excelente blog!",
    "id_usuario": 1,
    "id_blog": 1,
    "created_at": "2025-11-12T10:30:00.000Z"
  },
  {
    "id": 2,
    "contenido": "Muy útil, gracias!",
    "id_usuario": 2,
    "id_blog": 1,
    "created_at": "2025-11-12T11:45:00.000Z"
  }
]
```

---

### 4️⃣ POST - Crear comentario
```http
POST http://localhost:3000/api/comentarios
Content-Type: application/json

{
  "contenido": "Me encantó este artículo, muy bien explicado!",
  "id_usuario": 1,
  "id_blog": 1
}
```
**Respuesta esperada (201):**
```json
{
  "id": 3,
  "contenido": "Me encantó este artículo, muy bien explicado!",
  "id_usuario": 1,
  "id_blog": 1
}
```

---

### 5️⃣ PUT - Actualizar comentario
```http
PUT http://localhost:3000/api/comentarios/1
Content-Type: application/json

{
  "contenido": "Excelente blog! Muy completo."
}
```
**Respuesta esperada (200):**
```json
{ "message": "Comentario actualizado" }
```

---

### 6️⃣ DELETE - Eliminar comentario
```http
DELETE http://localhost:3000/api/comentarios/1
```
**Respuesta esperada (200):**
```json
{ "message": "Comentario eliminado" }
```

---

## ⚠️ Códigos de Estado HTTP

| Código | Significado |
|--------|-------------|
| **200** | OK - Operación exitosa |
| **201** | Created - Recurso creado exitosamente |
| **400** | Bad Request - Datos inválidos |
| **404** | Not Found - Recurso no encontrado |
| **500** | Internal Server Error - Error en el servidor |

---

## 🧪 Orden Recomendado de Prueba

### Paso 1: Crear datos base
1. ✅ Crear un usuario (POST /usuarios)
2. ✅ Crear una categoría (POST /categorias)
3. ✅ Crear una subcategoría (POST /subcategorias)

### Paso 2: Consultar datos
4. ✅ Obtener todos los usuarios (GET /usuarios)
5. ✅ Obtener usuario por ID (GET /usuarios/1)
6. ✅ Obtener todas las categorías (GET /categorias)
7. ✅ Obtener subcategoría por ID (GET /subcategorias/1)

### Paso 3: Actualizar datos
8. ✅ Actualizar usuario (PUT /usuarios/1)
9. ✅ Actualizar categoría (PUT /categorias/1)
10. ✅ Actualizar subcategoría (PUT /subcategorias/1)

### Paso 4: Trabajar con comentarios (después de crear blogs)
11. ✅ Crear comentario (POST /comentarios)
12. ✅ Obtener comentarios del blog (GET /comentarios/blog/1)
13. ✅ Actualizar comentario (PUT /comentarios/1)
14. ✅ Eliminar comentario (DELETE /comentarios/1)

### Paso 5: Eliminar datos
15. ✅ Eliminar usuario (DELETE /usuarios/1)
16. ✅ Eliminar categoría (DELETE /categorias/1)
17. ✅ Eliminar subcategoría (DELETE /subcategorias/1)

---

## 📥 Importar en Postman

1. Copia el contenido de este archivo
2. En Postman: **File → Import → Raw text**
3. Pega el contenido y selecciona **Create Collection**
4. ¡Listo para testear!

---

## 🔍 Tips para Debugging

- **Abre la consola del servidor** para ver errores SQL o de validación
- **Verifica IDs válidos** antes de hacer GET, PUT o DELETE
- **Revisa el Content-Type** esté siempre en `application/json` para POST/PUT
- **Usa variables de Postman** para guardar IDs dinámicamente: `{{userId}}`

