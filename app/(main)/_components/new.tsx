// import { SignOutButton, useUser } from '@clerk/nextjs'
// import React from 'react'

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import Image from 'next/image';
// import { ChevronsUpDown } from 'lucide-react';
// import { Avatar, AvatarImage } from '@/components/ui/avatar';


// const NewUser = () => {

//     const {user} = useUser();

//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <div role='button' className='flex items-center p-3 w-full text-sm hover:bg-primary/5'>
//                     <div className='flex items-center max-w-[150px]  gap-x-2'>
//                         <Avatar className='h-5 w-5'>
//                             <AvatarImage src={user?.imageUrl} />
//                         </Avatar>
//                         <span className=' font-medium line-clamp-1'>{user?.username}&apos;s Jotion</span>
//                     </div>
//                     <ChevronsUpDown className='h-4 w-4 ml-2 text-muted-foreground' />
//                 </div>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent
//             align='start'
//             alignOffset={11}
//             className='w-80'
//             forceMount>

//                 <div className='flex flex-col p-2 space-y-4'>
//                     <p className='text-xs text-muted-foreground font-medium'>{user?.emailAddresses[0].emailAddress}</p>
//                     <div className='flex items-center text-sm space-x-2'>
//                         <div className="rounded-md bg-secondary p-1"> 
//                             <Avatar className="h-8 w-8">
//                                 <AvatarImage src={user?.imageUrl} />
//                             </Avatar>
//                         </div>
//                         <span>
//                             {user?.username}&apos;s Jotion
//                         </span>
//                     </div>
//                 </div>

//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem asChild className='w-full text-muted-foreground'>
//                     <SignOutButton>
//                         Log out
//                     </SignOutButton></DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>

//     )
// }

// export default NewUser



const NewUser = () => {
  return (
    <div>NewUser</div>
  )
}

export default NewUser