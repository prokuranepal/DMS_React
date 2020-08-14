import React, {useCallback, useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Card, Modal, ModalHeader} from "reactstrap"
import TextField from '@material-ui/core/TextField';
import {useDropzone} from 'react-dropzone'
import Divider from '@material-ui/core/Divider';

const WriteBox = (props) => {
  const [commentText, setCommentText] = useState('');

  const [previewVisible, setPreviewVisible] = useState(false);

  const [previewImage, setPreviewImage] = useState('');

  const [fileList, setFileList] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setPreviewVisible(false)
  };

  const onDrop = useCallback(acceptedFiles => {
    setFileList(acceptedFiles.map(file => URL.createObjectURL(file)));
  }, []);


  const handleClickImage = () => {
    setIsOpen(!isOpen);
  };

  const handleAddPost = () => {
    console.log("send image list", fileList)
    props.addPost(commentText, fileList);
    setCommentText('');
    setPreviewVisible('');
    setPreviewImage('');
    setFileList([]);
    setIsOpen(false);
  };

  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const isEnabled = fileList.length === 0 && commentText === "";

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
      <Card className="jr-card">
        <div className="media mb-2">
          <Avatar className="size-50 mr-3" src={props.user.image}/>
          <div className="media-body">
            <TextField
              id="exampleTextarea"
              placeholder="Whats in your mind?"
              label="Whats in your mind?"
              value={commentText}
              onChange={(event) => onChange(event)}
              multiline
              fullWidth
              className="jr-wall-textarea"
              margin="none"
              variant="outlined"
              rows="4"
            />
          </div>
        </div>

        <div className="jr-clearfix">
          {isOpen === true ? <div className="d-flex flex-row">
              {console.log(fileList)}
              <ul className="list-inline mb-3 mr-2">
                {fileList.map((file, index) =>
                  <li className="mb-1 mr-0 list-inline-item align-top" key={index}>
                    <img alt="..." className="size-60 rounded" src={file}/>
                  </li>
                )
                }
              </ul>
              <div className='pointer' {...getRootProps()}>
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <i className="zmdi zmdi-collection-image"/> :
                    <i className="zmdi zmdi-collection-image"/>
                }
              </div>

            </div>
            : null}
          <Divider/>

          <Modal isOpen={previewVisible} toggle={handleCancel}>
            <ModalHeader>Slide Show</ModalHeader>
            <img alt="example" style={{width: '100%'}} src={previewImage}/>
          </Modal>
        </div>

        <div className="d-flex flex-row align-items-center mt-2">
          <div className="pointer" onClick={handleClickImage}>
            <i className="zmdi zmdi-camera mr-2 jr-fs-xl d-inline-flex align-middle"/>
            <span className="jr-fs-sm"> Add Photos/Album </span>
          </div>

          <Button color="primary" size='small' className="ml-auto mb-0"
                  disabled={(isEnabled) ? "disabled" : ""}
                  onClick={handleAddPost}>SEND
          </Button>
        </div>
      </Card>
    )
  }

export default WriteBox;
