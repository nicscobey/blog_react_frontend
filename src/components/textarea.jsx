// const TextArea = () => {

    
//     // const textarea = document.querySelector(".txt");

//     // textarea.addEventListener("input", function (e) {
//     // // Do stuff when the user types
//     //     this.style.height = "auto";
//     //     this.style.height = this.scrollHeight + "px";  
//     // });

//     return (
        
//             <textarea placeholder="Type many lines of texts in here and you will see magic stuff" className="txt"></textarea>
//     )

// }

// export default TextArea
import TextareaAutosize from 'react-textarea-autosize';

const TextArea = () => {

   


    return (
        
        <TextareaAutosize placeholder="Click here to type a comment..."/>

    )

}

export default TextArea