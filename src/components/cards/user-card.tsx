import user from '../../assets/user.png'

function UserCard() {
  return (
    <div className='w-[287px] h-[425px] py-[12px] px-[10] flex flex-col items-center gap-2.5 rounded-[20px] bg-prodcard shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
      <div className='flex flex-col items-center'>
        <img src={user} alt="user image" />
        <p className='text-xl-anton font-bold'>Minatozaki Sana</p>
        <p className='text-2xl-anton text-accent'>SALES DEPARTMENT</p>
      </div>
      <button className='flex w-[178px] h-[47px] px-2.5 py-7 bg-primary items-center justify-center text-2xl -anton rounded-[20px] cursor-pointer'>Edit User</button>
    </div>
  )
}

export default UserCard