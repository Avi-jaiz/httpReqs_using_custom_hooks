import '../UI/modal.css'

const Modal =(props)=>
{

    const modalHandler =()=>
    {
        props.onModalView(false);
    }

   return(

    <div className='backDrop' onClick={modalHandler}>
           <div className="modal">
 
 <h2>You must enter something...</h2>
 <div className='modalAction'>
 <button onClick={modalHandler}>OK</button>
 </div>
     </div>
    </div>
 
   )
}

export default Modal;