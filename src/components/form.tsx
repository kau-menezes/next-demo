interface ILogin{
    email: string; 
    password: string;
}

export const Form = ({ email, password }: ILogin) => {
    return(
        <>
        <div className="flex flex-col items-center w-full">
            <div className="md:w-1/4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2 w-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                    <input type="text" name="email" id="email" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="  janesmith@mail.com"/>
                    </div>
                </div>
            </div>
            <div className="md:w-1/4">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-sky-900"></label>
                <div className="mt-2 w-full">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-sky-900">Password</label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                    <input type="password" name="password" id="password" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="  * * * *"/>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}