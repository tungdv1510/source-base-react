import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeMessage } from "../../../store/toastMessages/slice"
import { UPLOAD_TYPE, FILE_SIZE, FILE_TYPE } from "./constants"
import "./styles.scss"

const UploadFile = () => {
  const dispatch = useDispatch()

  const [file, setFile] = useState<File | null>(null)

  const handleUpload = (event: any) => {
    const imageFile = event.target.files[0]

    if (!FILE_TYPE.includes(imageFile?.type)) {
      dispatch(
        changeMessage({
          message: "Please select photo with JPG/JPEG/PNG format.",
          statusCode: 400,
        })
      )
    } else if (imageFile?.size > FILE_SIZE) {
      dispatch(
        changeMessage({
          message: "Please select photo of 20MB or less.",
          statusCode: 400,
        })
      )
    } else {
      // setFile(imageFile)
    }
  }

  useEffect(() => {
    if (file) {
      // upload file
      const formData = new FormData()
      formData.append("file", file)
    }
  }, [file])

  return (
    <input
      type="file"
      accept="image/jpg,image/jpeg,image/png"
      multiple={UPLOAD_TYPE.SINGLE}
      className="buttons-upload"
      onChange={(event) => handleUpload(event)}
    />
  )
}

export default UploadFile
