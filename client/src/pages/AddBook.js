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

const submitData =() =>{
  const book_name = name.current.value
  const book_image = image.current.value
  const book_publication = publication.current.value
  const book_author = author.current.value
  const book_topic = topic.current.value

  const book_comments1_author = comments1_author.current.vaue
  const book_comments1_content = comments1_content.current.vaue

  const book_comments2_author = comments2_author.current.value
  const book_comments2_content = comments2_content.current.value

  const book_comments3_author = comments3_author.current.value
   const book_comments3_content =comments3_content.current.value


}

  return (
    <div className=" min-h-[89vh] bg-zinc-900 flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
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
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Book Comment4(Optional)..."
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Your Name..."
        />
        <input
          type="text"
          className="w-4/5 m-2 outline-none px-5 h-[30px] rounded-lg"
          placeholder="Your Email..."
        />
        <button type="submit" onClick={submitData} className="bg-green-500 p-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
