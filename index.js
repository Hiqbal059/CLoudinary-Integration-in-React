const uploadImage = async (img) =>{
    const formdata = new FormData()
    formdata.append("file", img[0])
    formdata.append("upload_preset", " ")
    formdata.append("cloud_name", " ")
    formdata.append("api_key", " ")

    fetch("https://api.cloudinary.com/v1_1/<'cloud_name'>/image/upload", {
        method: "post",
        body: formdata
    })
        .then((resp) => resp.json())
        .then((data) => {
            setImage(data.secure_url);
        })
        .catch((err) => console.log(err));
    };
