export const api = 'http://localhost:5000/api';
export const generalPublicUrl = (filename)=>{
    console.log('>>>>filename',filename)
    return `http://localhost:5000/public/${filename}`
}