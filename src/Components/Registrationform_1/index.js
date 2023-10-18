import React from 'react'
import RegistrationMainSection_B from './RegistrationMainSection'
import RegistrationMainSection_A from './RegistrationMainSection_A'
import RegistrationHeader from './RegistrationHeader'

const RegistrationForm_I = () => {
  // const navigate = useNavigate()
  // const location = useLocation()
  // console.log(location,"bharat")
  // if(location?.state?.code===444){
  //   console.log("code verified","bharat")
  // } else {
  //   console.log("code isn't verified","bharat")
   
  // }
  // if(location?.state?.code){
    
  // } else {
  //   navigate("/login")
  //   return <div>"Seems likenopage here because you have not started our subscription</div>
  // }
  return (
      <div >
      <RegistrationMainSection_A/>
      <RegistrationMainSection_B/>
    </div>
  )
}

// axios.get("myurl",{extra things})

// axios.pust("myurl","data","extra things means params header or anything")
// axios.put("myurl",data,{extra things optionalin every method})
// axios.delete("myurl",{extra things it is same like get method because delete works on id})

// return me ayega response / asynchronus
// rto handle that we have to use it asnchronously or like a promise because axios itself a promise
// egggg
// const myModiefAxios = axios.create({
//   baseUrl:"https://bharat.com"
 
// })
// const  call api  = async () => {
//   try{const respose = await  axios.get("myUrl",...);
//   console.log(response) //by defalse going to be an asynchromous line}
//      setData(response.dsata.data)
// }catch (error) {
  // console.log(error)
// }

// 2nd
// myModified.get(apiurl,...).then((res)=>{setData(res.data.data)}).catch(error=>console.log(error))
export default RegistrationForm_I
