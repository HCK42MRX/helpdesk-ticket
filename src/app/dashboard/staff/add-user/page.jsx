import TitlePage from "@/components/ui/Dashboard/TitlePage";
import FormAddUser from "@/components/ui/Forms/FormAddUser";

export default function addUser(){
  return (
    <>
    <TitlePage title='Add User' description='heres you can add user'/>
    <FormAddUser className='mt-8'/>
    </>
  )
}