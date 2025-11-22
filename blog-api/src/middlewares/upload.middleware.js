import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/blogs/');
    },
    filename: (req, file, cb) =>{
        const ext = path.extname(file.originalname);
        const uniqueName = Date.now()+'-'+Math.round(Math.round() * 1E9) + ext;
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) =>{
    const allowedTypes = /jpeg|jpg|png/;
    const mime = allowedTypes.test(file.mimetypes);
    const ext = allowedTypes.test(path.extname(file.originalname).toLocalLowerCase());
    if(mime && ext){
        return cb(null, true);
    }

    cb(new Error('Solo se permiten imagenes (jpeg, jpg, y png)'));
}

export const upload = multer({storage, fileFilter});
