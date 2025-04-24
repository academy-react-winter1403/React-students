import React from 'react'
import { Formik , Form , Field } from 'formik'
import { useParams } from 'react-router-dom'
import { postApi } from '../../core/services/api'
import CommentSection from '../BlogDetail/CommentSection'



const BlogComments = () => {

  const params = useParams()

const onSubmit = async (values) => {
  const newComment = {
    newsId: params.id,
    title: values.issue,
    describe: values.text
  }
  const res = await postApi("/News/CreateNewsComment",newComment)
}



  return (
    <div>
        <div className='flex flex-col gap-[10px] lg:w-[800px] sm:w-[500px] h-[auto] md:min-h-[960px] border-2 rounded-2xl border-[#EAEAEA] lg:mt-[35px] md:mt-[200px] sm:mt-[400px] mr-[30px]'>
            <h1 className='mt-[24px] mr-[24px] text-[24px]'>نظرات</h1>
            <Formik 
            onSubmit={onSubmit}
            initialValues={{ issue:"" , text: ""}} 
            >
              <Form className='flex flex-col items-center'>

                <div className='flex flex-col w-[95%] gap-[16px] mt-[25px] font-bold'>
                <label htmlFor="issue">موضوع</label>
                <Field className="border-gray-300 border-[1px] sm:w-[auto] md:w-[auto] lg:w-[auto] h-[38px] p-[15px] rounded-md flex" name="issue" type="text" placeholder='موضوع متن مورد نظر را جستجو کنید...'/>
                </div>

                <div className='flex flex-col mt-[24px] gap-[16px] w-[95%] font-bold'>
                <label>متن</label>
                <Field as="textarea" className="border-gray-300 border-[1px] pt-[15px] pr-[15px] h-[200px] rounded-md" name="text" type="text"  placeholder='متن مورد نظر را جستجو کنید...' />
                </div>

                <button type="submit" className=' border-2 border-gray-500 rounded-lg w-32 h-9 mt-[25px] '>ارسال نظر</button>
                

                </Form>
                
            </Formik>

                <h3 className='text-[16px] text-[#737373] mt-[32px] mr-[24px] font-bold'>نظرات</h3>

                <CommentSection />

        </div>
    </div>
  )
}

export default BlogComments