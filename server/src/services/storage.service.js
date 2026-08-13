import ImageKit from "@imagekit/nodejs";

const imageKit = new ImageKit({
    privateKey: process.env.imageKitPrivateKey,
});

async function uploadFile(buffer, fileName = "image.jpg") {
    const result = await imageKit.files.upload({
        file: buffer.toString("base64"),
        fileName,
    });
    return result;
}

async function deleteFile(fileId) {
    return imageKit.files.delete(fileId);
}

export { uploadFile, deleteFile };
