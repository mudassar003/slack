import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
const state=false;

export default function Home() {
  return (
   
    <><h1 className='text-9xl'>My Slack Project</h1>
    <Button className={cn(
      "bg-blue-500",
      state && "bg-red-500"
    )}>
      Click
      </Button></>
   
  )
}
