import React, { useRef } from "react";
import axios from "axios";
const AddBook = () => {
  const name = useRef();
  const image = useRef();
  const publication = useRef();
  const author = useRef();
  const topic = useRef();

  const comments1_author = useRef();
  const comments1_content = useRef();

  const comments2_author = useRef();
  const comments2_content = useRef();

  const comments3_author = useRef();
  const comments3_content = useRef();
  const comments4_author = useRef();
  const comments4_content = useRef();


  const uname = useRef()
  const uemail = useRef()

  const url = process.env.REACT_APP_SERVER_URL ||'http://localhost:5000/'
const submitData =(e) =>{
  e.preventDefault()
  const book_name = name.current.value
  const book_image = image.current.value
  const book_publication = publication.current.value
  const book_author = author.current.value
  const book_topic = topic.current.value

  const book_comments1_author = comments1_author.current.value
  const book_comments1_content = comments1_content.current.value

  const book_comments2_author = comments2_author.current.value
  const book_comments2_content = comments2_content.current.value

  const book_comments3_author = comments3_author.current.value
   const book_comments3_content =comments3_content.current.value
const user_name =uname.current.value
const user_email = uemail.current.value
const data = {book_name,book_image,book_publication,book_author,book_topic,book_comments1_author,book_comments1_content,
  book_comments2_author,book_comments2_content,book_comments3_author,book_comments3_content,user_name,user_email}
  console.log(data)


  axios.post(`${url}api/data`,data).then(res=>{
    if(res.data.msg){
      alert(res.data.msg) 
    }
    }).catch(err=>{
      console.log(err.message)
    })

}


  return (
    <div className=" min-h-[89vh] bg-zinc-900 flex justify-center">
      <form
        onSubmit={(e) => submitData(e)}
        className="w-4/5 h-full flex flex-col justify-center items-center"
      >
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Name..."
          ref={name}
          
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Image Link..."
          ref = {image}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Publication..."
          ref = {publication}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Author..."
          ref = {author}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Topic...Eg:Ayurvedha,Siddha..."
          ref = {topic}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment1 Author Email Or Name..."
          ref = {comments1_author}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment1...."
          ref = {comments1_content}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment2 Author Email Or Name..."
          ref = {comments2_author}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment2...."
          ref = {comments2_content}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment3 Author Email Or Name..."
          ref = {comments3_author}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment3...."
          ref={comments3_content}
         
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment4 Author(Optional)..."
          ref={comments4_author}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment4(Optional)..."
          ref={comments4_content}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Your Name..."
          ref={uname}
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Your Email..."
          ref={uemail}
        />
        <button type="submit" className="bg-green-500 p-5">
          Submit
        </button>
      </form>
    </div>
  );
  }
export default AddBook;
