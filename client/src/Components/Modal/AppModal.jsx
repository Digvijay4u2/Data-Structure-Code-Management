import React,{useState, useEffect} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MdClose } from 'react-icons/md'
import './appmodal.css'
import QuestionForm from '../QuestionForm/QuestionForm';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import {postQuestions} from '../../Action'
import { useHistory } from 'react-router-dom';

const AppModal = ({ showModal, setShowModal},props) => {
  
    const history = useHistory()
    const toggle = () => setShowModal(!showModal);
    
    const closeBtn = <MdClose className="close-btn" onClick={toggle}>&times;</MdClose>
    
    const [questionArray, setQuestionArray] = useState([])

    const handleQuestionState = (arr) => {
        
        setQuestionArray(arr)
    }
    const dispatch = useDispatch()

    const saveQuestions = () => {
        
        dispatch(postQuestions(questionArray))
       
    }
    return (
        <>
            {showModal ?
                (<>
            
                        <Modal size="lg" isOpen={showModal} toggle={toggle} className="custom" >
                            <ModalHeader className="modal-header" toggle={toggle} close={closeBtn}>Add Questions Here</ModalHeader>
                            <ModalBody className="modal-body">
                            <QuestionForm handleQuestionState={handleQuestionState}/>
                            </ModalBody>
                            <ModalFooter className="modal-footer">
                                <button className="mybtn" onClick={saveQuestions} >Submit</button>
                            </ModalFooter>
                        </Modal>
                </>
            ):null}
        </>
    )
}

export default AppModal