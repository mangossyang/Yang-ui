import React, { ChangeEvent, FC, useRef, useState } from 'react'
import Dragger from './dragger'
import axios from 'axios'
import UploadList from './uploadList'
interface UploadProps {
  action: string
  multiple?: boolean
  defaultFileList?: UploadFile[]
  withCredentials?: boolean
  name?: string
  headers?: { [key: string]: any }
  data?: { [key: string]: any }
  accept?: string
  drag?: boolean
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (res: any, file: File) => void
  onError?: (err: any, file: File) => void
  onChange?: (file: File) => void
  beforeUpload?: (file: File) => boolean | Promise<File>
  onRemove?: (file: UploadFile) => void
}
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: number
  size: number
  name: string
  raw?: File
  status?: UploadFileStatus
  percent?: number
  [str: string]: any
}
export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    multiple,
    defaultFileList,
    withCredentials,
    name,
    headers,
    data,
    accept,
    drag,
    children,
    onProgress,
    onSuccess,
    onError,
    onChange,
    beforeUpload,
    onRemove
  } = props
  const inputEle = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const handleClick = () => {
    inputEle.current && inputEle.current.click()
  }
  const hanleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    uploadFile(files)
    inputEle.current && (inputEle.current.value = '')
  }
  const handleRemove = (item: UploadFile) => {
    setFileList(fileList.filter((file) => file.uid !== item.uid))
    onRemove && onRemove(item)
  }
  const handleBefore = (file: File) => {
    if (!beforeUpload) {
      sendFile(file)
    } else {
      const ret = beforeUpload(file)
      if (ret && ret instanceof Promise) {
        ret.then((res) => {
          sendFile(res)
        })
      } else if (ret !== false) {
        sendFile(file)
      }
    }
  }

  const uploadFile = (files: FileList) => {
    if (multiple) {
      Array.from(files).forEach((f) => {
        handleBefore(f)
      })
    } else {
      handleBefore(files[0])
    }
  }
  const sendFile = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now(),
      size: file.size,
      name: file.name,
      raw: file,
      percent: 0,
      status: 'ready'
    }
    setFileList((preList) => [_file, ...preList])
    const formData = new FormData()
    formData.append(name || file.name, file)
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
    }
    axios
      .post('https://jsonplaceholder.typicode.com/posts', formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data'
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0
          if (percentage <= 100) {
            updateFileList(_file, {
              status: 'uploading',
              percent: percentage
            })

            onProgress && onProgress(percentage, file)
          }
        }
      })
      .then((res) => {
        onSuccess && onSuccess(res, file)
        onChange && onChange(file)
        updateFileList(_file, {
          status: 'success',
          res
        })
      })
      .catch((err) => {
        onError && onError(err, file)
        onChange && onChange(file)
        updateFileList(_file, {
          status: 'success',
          err
        })
      })
  }
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((preList) => {
      return preList.map((file) => {
        if (file.uid === updateFile.uid) {
          return {
            ...updateFile,
            ...updateObj
          }
        } else {
          return file
        }
      })
    })
  }
  return (
    <div className="upload" onClick={handleClick}>
      {drag ? (
        <Dragger onFile={(files) => uploadFile(files)}>{children}</Dragger>
      ) : (
        { children }
      )}
      <input
        type="file"
        style={{ display: 'none' }}
        ref={inputEle}
        multiple={multiple}
        onChange={hanleChange}
        accept={accept}
      />
      <UploadList fileList={fileList} onRemove={handleRemove}></UploadList>
    </div>
  )
}

export default Upload
