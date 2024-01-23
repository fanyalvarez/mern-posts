import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'do5iznanb',
    api_key: '481924718996784',
    api_secret: '8fa2FEYyhQg2_IZDIxbcyKe32JE'
});


export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "posts"
    })
}

export const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id)
}
