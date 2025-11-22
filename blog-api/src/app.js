import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import categoryRoutes from "./routes/category.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import subcategoryRoutes from "./routes/subcategory.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import { registerStaticFiles } from './config/staticFiles.js';

const app = express();

registerStaticFiles(app);
app.use(cors({origin: 'http://127.0.0.1:5500'})); //origin: http://127.0.0.1:5500/
app.use(express.Router());
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use('/api/usuarios', userRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/comentarios', commentRoutes);
app.use('/api/subcategorias', subcategoryRoutes);
app.use('/api/blogs', blogRoutes)

export default app;
